import React from "react";
import logo from "./assets/logo.svg";
import blobThing from './assets/bg-tablet-pattern.svg'

export default function Header() {
  return (
    <div className="flex justify-center headerWrapper mt-14">
      <div className="flex justify-between items-center header w-[80%]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-7 text-[hsl(228,_39%,_23%)] headerTags">
          <span>Pricing</span>
          <span>Product</span>
          <span>About Us</span>
          <span>Careers</span>
          <span>Community</span>
        </div>
        <div>
          <button className="bg-[hsl(12,_88%,_59%)] text-white py-3 px-9 shadow-lg rounded-[2vmax] hover:opacity-70 duration-100 ease-in-out">Get Started</button>
        </div>
      </div>
      <img src={blobThing} alt="" className="absolute -top-36 -right-28 -z-10" />
    </div>

  );
}
