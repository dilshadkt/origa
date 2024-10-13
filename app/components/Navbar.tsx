"use client";
import { navabar } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full absolute top-0 z-30  ">
      <div className="container mx-auto   px-5 md:px-10 flex items-center justify-between">
        <div className="flex items-center mt-7 " aria-label="Home" role="img">
          <Image
            className="cursor-pointer w-32 "
            src="/origalogo.png"
            alt="logo"
            width={400}
            height={400}
          />
          <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800"></p>
        </div>
        <div className="md:bg-white/10   md:border border-gray-600/50 shadow-md md:pr-10 mt-7 rounded-lg">
          <button
            onClick={() => setShow(!show)}
            className={`${
              show ? "hidden" : "block"
            } sm:block bg-white/10 p-3 rounded-lg md:hidden lg:hidden text-gray-500 flex items-center justify-center hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
          >
            <Image
              className="h-8 w-8"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg"
              alt="show"
              width={60}
              height={60}
            />
          </button>
          <div
            id="menu"
            className={`md:block lg:block ${show ? "" : "hidden"} pr-10`}
          >
            <button
              onClick={() => setShow(!show)}
              className="block   md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500  md:bg-transparent z-30 top-0 mt-3"
            >
              <Image
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                alt="hide"
                width={60}
                height={60}
              />
            </button>
            <ul
              className={`transition-all duration-500 flex text-base  pr-10 md:pr-0 justify-start items-end md:items-center py-10 md:py-3 md:flex flex-col md:flex-row md:justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white/30 md:bg-transparent  z-20`}
            >
              {navabar.map((item) => (
                <li
                  key={nanoid()}
                  onClick={() => setShow(!show)}
                  className="text-black md:text-white  hover:text-gray-300 cursor-pointer md:ml-10 pt-5 md:pt-0"
                >
                  <Link href={item.direction}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={"#contact"} className="hidden md:block">
          <button className="flex bg-white/10 py-3 hover:bg-white/20 transition-all duration-300 text-white  border border-gray-600/50 shadow-md pr-10 mt-7 rounded-lg   items-center justify-center pl-10 ">
            Let's Talk
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
