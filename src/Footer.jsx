import React, { useState, useEffect } from "react";
import whiteLogo from "./assets/whiteLogo.svg";

import media1 from "./assets/icon-facebook.svg";
import media2 from "./assets/icon-youtube.svg";
import media3 from "./assets/icon-twitter.svg";
import media4 from "./assets/icon-pinterest.svg";
import media5 from "./assets/icon-instagram.svg";

import blobThing from "./assets/bg-simplify-section-desktop.svg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [classes, setClasses] = useState("");
  const [isMobileFooter, setIsMobileFooter] = useState(false);

  function handleResize(e) {
    if (e.target.innerWidth < 1000) {
      setIsMobileFooter(true);
    } else {
      setIsMobileFooter(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", (e) => handleResize(e));
  }, []);

  function submitEmail() {
    const copyemail = email;
    if (!copyemail) return;

    if (!copyemail.includes("@" | "."))
      setClasses(
        "border-2 border-[hsl(12,_88%,_59%)] text-[hsl(12,_88%,_59%)]"
      );

    if (copyemail.includes(("@" && "." && "@gmail" && ".com") || ".yahoo")) {
      setClasses("");
    }
  }

  return (
    <div className="footer flex flex-col mt-64">
      <div className="min-h-[15rem] py-5 bg-[hsl(12,_88%,_59%)] flex justify-center">
        <div className="flex w-[80%] justify-between items-center z-10 max-[800px]:flex-col">
          <span className="text-4xl font-semibold text-white w-[35%] max-[800px]:w-[50%] max-[600px]:w-[100%]">
            Simplify how your team works today.
          </span>
          <button className="text-[hsl(12,_88%,_59%)] px-10 py-3 font-semibold bg-white rounded-3xl hover:opacity-70 duration-100 ease-in-out">
            Get Started
          </button>
          <img
            src={blobThing}
            alt=""
            className="absolute mb-[15rem] ml-[7rem] w-[100%] -z-10"
          />
        </div>
      </div>
      {isMobileFooter ? (
        <div className="flex justify-center items-center h-[45rem] bg-[hsl(223,_12%,_13%)]">
          <div className="w-[90%] h-[80%] flex flex-col gap-20 items-center">
            <div className="flex gap-2">
              <input
                type="text"
                className={`px-5 py-2.5 rounded-3xl  h-min${classes}`}
                placeholder="Updates in your inbox..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-[hsl(12,_88%,_59%)] px-5 py-2.5 rounded-3xl text-white h-min"
                onClick={submitEmail}
              >
                <span className="relative top-0.5">Go</span>
              </button>
            </div>
            <div className="flex gap-10 text-white opacity-80 footerTags justify-between w-[70%]">
              <div className="flex flex-col gap-5">
                <span>Home</span>
                <span>Pricing</span>
                <span>Products</span>
                <span>About Us</span>
              </div>
              <div className="flex flex-col gap-5">
                <span>Careers</span>
                <span>Community</span>
                <span>Privacy Policy</span>
              </div>
            </div>
              <div className="flex justify-between w-[80%]">
                <img src={media1} alt="" className="cursor-pointer w-[10%]" />
                <img src={media2} alt="" className="cursor-pointer w-[10%]" />
                <img src={media3} alt="" className="cursor-pointer w-[10%]" />
                <img src={media4} alt="" className="cursor-pointer w-[10%]" />
                <img src={media5} alt="" className="cursor-pointer w-[10%]" />
              </div>
              <div className="flex justify-center">
              <img src={whiteLogo} alt="" className="w-[14rem]" />
              </div>
              <div>
              <span className="text-[hsl(227,_12%,_61%)] opacity-80">
                Copyright 2020. All Rights Reserved
              </span>
              </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center bg-[hsl(233,_12%,_13%)] h-[17rem] items-center z-20">
          <div className="flex justify-between w-[80%]">
            <div className="flex gap-40">
              <div className="flex flex-col justify-between">
                <img src={whiteLogo} alt="" />
                <div className="flex justify-between">
                  <img src={media1} alt="" className="cursor-pointer" />
                  <img src={media2} alt="" className="cursor-pointer" />
                  <img src={media3} alt="" className="cursor-pointer" />
                  <img src={media4} alt="" className="cursor-pointer" />
                  <img src={media5} alt="" className="cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white opacity-80 footerTags">
                <span>Home</span>
                <span>Pricing</span>
                <span>Products</span>
                <span>About Us</span>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 text-white opacity-80 footerTags">
              <span>Careers</span>
              <span>Community</span>
              <span>Privacy Policy</span>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex gap-2">
                <input
                  type="text"
                  className={`px-5 py-2.5 rounded-3xl ${classes}`}
                  placeholder="Updates in your inbox..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-[hsl(12,_88%,_59%)] px-5 py-2.5 rounded-3xl text-white"
                  onClick={submitEmail}
                >
                  <span className="relative top-0.5">Go</span>
                </button>
              </div>
              <span className="ml-auto text-[hsl(227,_12%,_61%)] opacity-80">
                Copyright 2020. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
