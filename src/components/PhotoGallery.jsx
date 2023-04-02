import React from "react";

function PhotoGallery() {
  return (
    <div className="w-full h-auto pt-[100px] mb-20" id="photo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-blue-700 ">PHOTO GALLERY</h1>
          <h1 className="font-semibold text-3xl md:text-5xl xl:text-6xl text-[#3d405b] my-3 text-center">
            PHOTO'S FROM TRAVELLERS
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mx-10">
          <img
            src="https://www.gamintraveler.com/wp-content/uploads/2020/06/philippines-budcket-list.jpg"
            alt=""
            className="h-full rounded-lg md:rounded-3xl shadow-xl"
          />
          <img
            src="https://www.traveldailymedia.com/assets/2020/02/philippines.jpg"
            alt=""
            className="row-span-2 w-full h-full object-cover md:h-full rounded-lg md:rounded-3xl shadow-xl"
          />
          <img
            src="https://businessmirror.com.ph/wp-content/uploads/2018/06/Chinese-tourism-philippines.jpg"
            className="h-full object-cover rounded-lg md:rounded-3xl shadow-xl"
          />
          <img
            src="https://beta.tourism.gov.ph/wp-content/uploads/2023/01/Landscape-watermark-1.jpg"
            className="w-full h-full object-cover rounded-lg md:rounded-3xl shadow-xl"
          />
          <img
            src="https://news.cgtn.com/news/346b544e79597a4d334d6a4e7941544d7a636a4e31457a6333566d54/img/fd758878cebb490a883a8eefe1446c07/fd758878cebb490a883a8eefe1446c07.jpg"
            className="rounded-lg md:rounded-3xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
