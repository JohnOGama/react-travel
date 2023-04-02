import React from "react";

function Footer() {
  return (
    <div className="w-full h-[500px]  bg-[#3d405b]/80 text-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row md:justify-between xl:items-center">
          <div className="max-w-[900px] pt-[100px]">
            <h1 className="ml-4">CALL TO ACTION</h1>
            <h1 className="font-bold text-3xl max-w-[500px] ml-4 my-4 md:text-6xl xl:max-w-[100%] md:max-w-[80%]">
              READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
            </h1>
            <p className="ml-4 text-left text-sm md:text-md">
              A stunning photo capture taken by a tourist in the beautiful
              Philippines! The picture showcases the country's breathtaking
              scenery, highlighting the crystal-clear waters and lush greenery
              that make this tropical paradise a must-visit destination.
            </p>
          </div>

          <button className="border-2 border-white w-[200px] rounded-full py-3 ml-4 mt-5 hover:bg-black/30 xl:w-[200px] xl:h-[50px] xl:mt-[100px]">
            CONTACT US!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
