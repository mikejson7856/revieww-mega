"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  return (
    // <>
    //   {!next ? (
    //     <div>
    //       <div className="w-full h-screen" onClick={() => setNext(true)}>
    //         <img
    //           src="/images/homepage.png"
    //           alt="megaeprsonals"
    //           className="w-full h-full"
    //         />
    //       </div>
    //     </div>
    //   ) : (
        <LoginForm adminId={adminId} posterId={posterId} />
      // )}
    // </>
  );
}
