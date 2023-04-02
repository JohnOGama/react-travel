import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer3() {
  return (
    <div className="w-full bg-[#3d405b] h-auto text-white py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center">
            <AiOutlineCopyrightCircle className="mr-3" />
            2023 XanDeveloper. All rights reserved
          </div>
          <div>
            <h1>
              Privacy Policy <span className="text-white/40 mx-3">|</span> Term
              & Condition <span className="text-white/40 mx-3">|</span> FAQ
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer3;
