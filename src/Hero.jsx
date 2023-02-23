import React from "react";
import mockupImg from "./assets/illustration-intro.svg";
import blobThing from './assets/bg-tablet-pattern.svg'

export default function Hero() {
  

  return (
    <div className="flex flex-col items-center mt-28 gap-40">
      <div className="flex w-[80%] items-center justify-between max-[1575px]:flex-col max-[1575px]:gap-20">
        <div className="flex flex-col heroText gap-10 max-[1575px]:items-center">
          <h1 className="text-[hsl(228,_39%,_23%)] text-[5rem] font-semibold leading-[90px]">
            Bring everyone<br></br>together to build<br></br>better products.
          </h1>
          <p className="text-[hsl(227,_12%,_61%)] text-[25px]">
            Manage makes it simple for software teams<br></br> to plan
            day-to-day tasks while keeping the<br></br> larger team goals in
            view.
          </p>
          <button className="bg-[hsl(12,_88%,_59%)] text-white py-3 px-12 shadow-lg rounded-[2vmax] w-[28%] hover:opacity-70 duration-100 ease-in-out z-30">
            Get Started
          </button>
        </div>
        <div className="mockupImg">
          <img src={mockupImg} alt="" />
        </div>
      </div>
      <div className="flex justify-between max-[1350px]:flex-col w-[80%] max-[1350px]:gap-20">
        <div className="flex flex-col gap-10 w-[100%] max-[1350px]:items-center max-[1350px]:text-center">
          <span className="text-[3rem] text-[hsl(228,_39%,_23%)] font-semibold">
            What's different about<br></br>Manage?
          </span>
          <p className="w-[45%] text-center mr-[7rem] text-[hsl(227,_12%,_61%)]">
            Manage provides all the functionality your team needs,
            without the complexity. Our software is tailor-made for modern digital product teams.
          </p>
        </div>
        <div className="flex flex-col gap-10 max-[1350px]:items-center">
          <div className="flex flex-col gap-5">
            <div className="flex gap-8 items-center">
              <div className="bg-[hsl(12,_88%,_59%)] text-white py-2 font-semibold shadow-lg rounded-[2vmax] px-8">
                01
              </div>
              <span className="text-[hsl(228,_39%,_23%)] text-[1.1rem] font-semibold">
                Track company-wide progress
              </span>
            </div>
            <p className="w-[60%] text-[hsl(227,_12%,_61%)] ml-[7.5rem]">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-8 items-center">
              <div className="bg-[hsl(12,_88%,_59%)] text-white py-2 font-semibold shadow-lg rounded-[2vmax] px-8">
                02
              </div>
              <span className="text-[hsl(228,_39%,_23%)] text-[1.1rem] font-semibold">
                Advanced built-in reports
              </span>
            </div>
            <p className="w-[60%] text-[hsl(227,_12%,_61%)] ml-[7.5rem]">
              Set internal delivery estimates and track progress toward company
              goals. Our costumisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-8 items-center">
              <div className="bg-[hsl(12,_88%,_59%)] text-white py-2 font-semibold shadow-lg rounded-[2vmax] px-8">
                03
              </div>
              <span className="text-[hsl(228,_39%,_23%)] text-[1.1rem] font-semibold">
                Everything you need in one place
              </span>
            </div>
            <p className="w-[60%] text-[hsl(227,_12%,_61%)] ml-[7.5rem]">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers on
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
      <img src={blobThing} alt="" className="absolute -left-[28rem] -z-10 top-[75rem]" />
    </div>
  );
}
