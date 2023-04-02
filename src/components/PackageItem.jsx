import React from "react";
import { BiTime } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

function PackageItem(props) {
  const star = [1, 2, 3, 4, 5];
  return (
    <div className="my-10 ">
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-10 lg:mx-0">
        <div className="w-[370px] h-[400px] ">
          <img
            src={props.image}
            className="w-[400px] h-[400px] object-cover rounded-tl-[30px] rounded-tr-[30px] mx-auto md:rounded-tr-none md:rounded-tl-[30px] md:rounded-bl-[30px]"
          />
        </div>
        <div className="bg-slate-100 md:w-[400px] lg:w-[500px] md:py-10 w-[370px] h-[400px]   md:h-[400px] lg:h-[400px] flex flex-col  px-4 py-10">
          <h1 className="font-bold text-2xl text-left mt-2 md:text-xl lg:w-[360px] lg:text-3xl text-[#3d405b]">
            {props.title}
          </h1>
          <p className="text-sm my-4 md:text-lg text-left">{props.parag}</p>
          <div className="flex bg-white/90 rounded-full px-3 py-3 justify-center  mt-3 md:px-4">
            <p className="flex items-center justify-center mx-3">
              <BiTime className="mr-2" />
              7Days
            </p>

            <p className="flex items-center justify-center mr-5 whitespace-nowrap">
              <BsFillPeopleFill className="mr-2" />
              packs: 10
            </p>

            <p className="flex items-center justify-center mr-5">
              <MdLocationOn className="mr-2" /> Philippines
            </p>
          </div>
        </div>
        <div className="bg-[#3d405b]  mb-10 md:mb-0 w-[370px] h-[400px] rounded-bl-[30px] rounded-br-[30px] md:rounded-bl-none md:rounded-tr-[30px] text-white flex flex-col py-10 items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-xl mr-5">(25 reviews) </h1>
            {star.map(() => (
              <AiFillStar />
            ))}
          </div>
          <h1 className="text-6xl font-bold text-center mt-5">₱ 50k</h1>
          <p>/per person</p>
          <button className="border-2 rounded-full px-6 py-3 mt-5 hover:bg-white/10 duration-100">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageItem;
