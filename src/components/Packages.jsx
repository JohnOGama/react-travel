import React from "react";
import PackageItem from "./PackageItem";

function Packages() {
  return (
    <div className="w-full h-auto my-[100px]" id="pack">
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col items-center">
          <p className="text-blue-700">POPULAR PACKAGES</p>
          <h1 className="font-semibold text-3xl md:text-5xl xl:text-6xl text-[#3d405b] my-3 md:text-center text-center">
            CHECK OUT OUR PACKAGES
          </h1>
          <p className="max-w-[1000px] text-center text-[14px] md:text-lg   md:mt-4 text-stone-600 mx-4">
            All the things you can do in life, travel is the one that truly
            opens your eyes, broadens your horizons, and enriches your soul.
            It's an opportunity to immerse yourself in new cultures, make
            lifelong memories, and gain a fresh perspective on the world around
            you.
          </p>
        </div>
        <PackageItem
          title={"EXPERIENCE THE GREAT HOLIDAY ON BEACH"}
          parag={
            "The beach is one of the most magical places on earth, where the soft sand meets the endless ocean, and the warm sun meets the cool breeze."
          }
          image="https://cdn.southeastasiabackpacker.com/wp-content/uploads/2019/07/Tour-B-10-1090x872.jpg"
        />
        <PackageItem
          title={"WORLD'S PERFECT VOLCANIC CONE"}
          parag={
            "All the volcanoes in the Philippines, Mayon Volcano or Mount Mayon is the most iconic because of its perfect cone shape. "
          }
          image="https://handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg"
        />
        <PackageItem
          title={"BAGUIO CITY"}
          parag={
            "Hailed as the Summer Capital of the Philippines, Baguio is the top destination to go to if you want to take a break from the tropical heat in the lowlands. "
          }
          image="https://cdn.thecrazytourist.com/wp-content/uploads/2017/08/ccimage-5139129946_4a89124f27_b.jpg"
        />
        <div className="flex justify-center">
          <button className="btn" style={{ width: "230px" }}>
            <span>VIEW ALL PACKAGES</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packages;
