import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="w-full absolute top-0 z-30  ">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center" aria-label="Home" role="img">
          <Image
            className="cursor-pointer w-8 sm:w-auto"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800"></p>
        </div>
        <div className="bg-white/20  border border-white pr-10 mt-7 rounded-lg">
          <button
            onClick={() => setShow(!show)}
            className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            className={`md:block lg:block ${show ? "" : "hidden"}`}
          >
            <button
              onClick={() => setShow(!show)}
              className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3"
            >
              <Image
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                alt="hide"
                width={60}
                height={60}
              />
            </button>
            <ul className="flex text-3xl md:text-base items-center py-3 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
              <li className="text-white text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="#about">About</Link>
              </li>
              <li className="text-white text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="#expertise">Expertise</Link>
              </li>
              <li className="text-white text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="#industries">Industries</Link>
              </li>
              <li className="text-white text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="#works">Works</Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
