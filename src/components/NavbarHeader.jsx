import React, { useState, useEffect } from "react";
import { BsChevronDown, BsGlobeAmericas } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("bg-black/80");
    } else {
      navbar.classList.remove("bg-black/80");
    }
  };

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full" id="home">
      <div className="w-full xl:px-[140px] navbar flex top-0 right-0 left-0 fixed justify-between items-center mx-auto py-4 px-10 md:px-3  z-[1]">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="font-bold text-white text-3xl cursor-pointer"
        >
          Philippines
        </Link>
        <div className="flex items-center justify-center text-white z-10 relative">
          <ul className="hidden md:flex">
            <li className="m-4">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" font-medium cursor-pointer"
              >
                Destination
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="pack"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className=" font-medium cursor-pointer"
              >
                Packages
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="photo"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className=" font-medium cursor-pointer"
              >
                Photo
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className=" font-medium cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="items-center m-4 cursor-pointer hidden md:flex">
            <img
              src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
              alt="UK"
              className="w-[20px] h-[15px] mb-[2px] mr-3"
            />
            <h1 className=" font-medium">EN</h1>
            <BsChevronDown size={15} />
          </div>
          <ImSearch className="cursor-pointer hidden md:flex" />
          {/* MENU BAR */}
          <BiMenu
            size={40}
            className="cursor-pointer md:hidden z-100"
            onClick={handleClick}
          />

          <ul
            className={
              nav
                ? "fixed top-0 left-0 bg-black w-[100%] h-full flex flex-col justify-center items-center duration-300 ease-in-out"
                : "hidden duration-300 ease-in-out left-[-100%] w-full h-full"
            }
          >
            <FaTimes
              size={30}
              className="absolute top-5 right-5 cursor-pointer"
              onClick={handleClick}
            />
            <li className="m-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
                className=" font-bold text-3xl text-left cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
                className=" font-bold text-3xl text-left cursor-pointer"
              >
                Places to go
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="pack"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={handleClick}
                className=" font-bold text-3xl text-left cursor-pointer"
              >
                Packages
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="photo"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={handleClick}
                className=" font-bold text-3xl text-left cursor-pointer"
              >
                Photo
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={handleClick}
                className=" font-bold text-3xl text-left cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1608869497206-82e567a77414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          className="w-full h-[700px] object-cover relative z-[-1]"
        />

        {/* <img
          src="https://images.unsplash.com/photo-1608869497206-82e567a77414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          alt="Philippines"
          className="w-full h-[700px] object-cover relative z-[-6]"
        /> */}

        <div className="absolute  bg-black/40 w-full h-[700px] top-0 z-1">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white  md:left-0 md:translate-x-0  xl:left-[14%] ">
            <div className=" text-start">
              <h1 className=" font-bold text-3xl md:text-5xl text-center whitespace-nowrap xl:text-7xl ">
                Welcome to Philippines
              </h1>
              <h1 className="md:text-2xl md:mt-4 xl:text-3xl">
                Make your Tour amazing with Us.
              </h1>
            </div>
            <div className="flex items-center justify-center mt-4 md:justify-start">
              <Link
                className=" px-5 py-2 flex items-center hover:bg-blue-600 hover:text-white cursor-pointer  md:text-xl xl:text-xl md:px-6 md:py-4 rounded-full mr-5 bg-blue-500 duration-200"
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                LEARN MORE
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="border-white border-2 px-5 py-2 flex items-center hover:bg-black/10 hover:text-white cursor-pointer  md:text-xl md:px-6 md:py-4 xl:text-xl rounded-full bg-black/20 duration-300"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
