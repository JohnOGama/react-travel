import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";

function Footer2() {
  return (
    <div className="w-full bg-[#3d405b] text-white h-auto py-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="px-5">
          <h1 className="font-bold text-4xl">PHILIPPINES</h1>
          <p className="text-sm my-3">
            Our travel agency, we understand how important it is to have a
            worry-free and enjoyable trip to the Philippines. That's why we're
            committed to ensuring that your experience is nothing short of
            exceptional.
          </p>
        </div>
        <div className="px-5">
          <h1 className="font-bold text-3xl">Contact Us</h1>
          <p className=" my-3">Feel free to contact and reach us!</p>
          <div className="flex my-3">
            <BsTelephone className="mr-3" />
            <a href="/">+01 (123) 4567 90</a>
          </div>
          <div className="flex my-3">
            <AiOutlineMail className="mr-3" />
            <a href="/">info.tourly.com</a>
          </div>
          <div className="flex my-3">
            <TfiLocationPin className="mr-3" />
            <a href="/">Bacoor Philippines</a>
          </div>
        </div>
        <div className="flex flex-col mt-10 text-center items-center md:mt-0">
          <h1>Subscribe our newsletter for more update & news !!</h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[400px] py-4 rounded-full pl-5 my-4 text-black outline-none"
          />
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-[#3d405b]/40">
            SUBCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
