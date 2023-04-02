import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Hero() {
  return (
    <div className="w-full h-auto" id="hero">
      <div className="max-w-7xl mx-auto text-black">
        <div className="flex justify-center flex-col px-5 my-10 items-center xl:px-0">
          <p className="mb-3 text-blue-700">UNCOVER PLACES</p>
          <h1 className="font-semibold text-3xl md:text-5xl xl:text-6xl text-[#3d405b]">
            POPULAR DESTINATION
          </h1>
          <p className="max-w-[1000px] text-[14px] md:text-lg text-center mt-3 md:mt-5 text-stone-600">
            The Philippines has over 7,000 islands and is the perfect getaway to
            experience a mix of nature, culture, and fun. The geographical
            features of the Philippines ensure that there are natural
            attractions wherever you go. Whether you're headed to Luzon tourist
            spots, Visayas tourist spots, or Mindanao tourist spots, expect
            beautiful sights, unique attractions, friendly locals, and memorable
            experiences.
          </p>
        </div>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-0">
          <div className="border-2 rounded-lg shadow-xl w-[380px] mx-auto duration-300 mt-10 ">
            <img
              src="https://images.unsplash.com/photo-1531761535209-180857e963b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <div className="px-3 my-4">
              <h1 className="font-bold text-xl pb-2">El Nido Palawan</h1>
              <p className="mb-3">
                El Nido is situated at the northern end of Palawan island in the
                Philippines. Palawan is an extremely popular tourist destination
                thanks to El Nido, but most flights to the island land in the
                main city of Puerto Princessa.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-lg shadow-xl w-[380px] mx-auto duration-300 mt-10 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Boracay_White_Beach.png"
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <div className="px-3 my-4">
              <h1 className="font-bold text-xl pb-2">Boracay</h1>
              <p>
                Boracay is also the ultimate water sports playground. From
                Boracay helmet diving, Boracay snorkeling, cliff diving,
                island-hopping in the Philippines, to parasailing, you're sure
                to get a good dose of adrenaline rush here. You can even book a
                private island-hopping in Boracay as part of a Boracay tour
                package.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-lg shadow-xl w-[380px] mx-auto duration-300 mt-10 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/Chocolate_Hills_overview.JPG"
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <div className="px-3 my-4">
              <h1 className="font-bold text-xl pb-2">Chocolate Hills</h1>
              <p>
                Chocolate Hills and its immediate environs are relatively flat
                to rolling topography with elevation ranges from 100 m to 500 m
                above sea level. It has been declared the country's 3rd National
                Geological Monument on June 18, 1988 in recognition of its
                scientific value and geomorphic uniqueness.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="btn">
            <span>More Destination</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
