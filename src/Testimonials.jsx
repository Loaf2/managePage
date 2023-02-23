import React from "react";
import testimonial1 from "./assets/avatar-anisha.png";
import testimonial2 from "./assets/avatar-ali.png";
import testimonial3 from "./assets/avatar-richard.png";

export default function Testimonials() {
  return (
    <div className="flex justify-center testimonialsWrapper mt-[15rem]">
      <div className="testimonials flex flex-col w-[80%] items-center gap-20">
        <div>
          <span className="text-[3rem] font-medium text-[hsl(228,_39%,_23%)]">What they've said</span>
        </div>
        <div className="flex testimonialCards gap-8 mb-20 max-[1000px]:flex-col">
          <div className="px-5 py-10 flex flex-col items-center justify-center bg-[hsl(0,_0%,_98%)] rounded-md">
            <img src={testimonial1} alt="" className="w-20 relative -top-5" />
            <span className="mb-5">Anisha Li</span>
            <p className="text-[hsl(227,_12%,_61%)] text-center">
              "Manage has supercharged our team's workflow. The maintain
              visibility on larger milestones at all times keeps everyone
              motivated."
            </p>
          </div>
          <div className="px-5 py-10 flex flex-col items-center bg-[hsl(0,_0%,_98%)] rounded-md">
            <img src={testimonial2} alt="" className="w-20 relative -top-5" />
            <span className="mb-5">Ali Bravo</span>
            <p className="text-[hsl(227,_12%,_61%)] w-[92%] text-center">
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused."
            </p>
          </div>
          <div className="px-5 py-10 flex flex-col items-center bg-[hsl(0,_0%,_98%)] rounded-md">
            <img src={testimonial3} alt="" className="w-20 relative -top-5" />
            <span className="mb-5">Richard Watts</span>
            <p className="text-[hsl(227,_12%,_61%)] text-center w-[85%]">
              "Manage allows us to provide structure and projects and it keeps
              us organized and focused. I can't stop reconing them to everyone I
              talk to!"
            </p>
          </div>
        </div>
        <button className="bg-[hsl(12,_88%,_59%)] text-white py-3 px-12 shadow-lg rounded-[2vmax] hover:opacity-70 duration-100 ease-in-out">
            Get Started
          </button>
      </div>
    </div>
  );
}
