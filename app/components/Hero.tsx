"use client";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" relative bg-gray-100 overflow-y-hidden ">
      <Navbar />
      <div className="w-full">
        <div className="  h-screen   overflow-hidden relative rounded-b-lg bg-indigo-700  mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <Image
            src={"/hero2.jpg"}
            alt="hero"
            quality={100}
            width={2000}
            height={2000}
            className="absolute scale-up z-0 w-full h-full object-cover top-0"
          />
          <Image
            className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
            alt="bg"
            width={100}
            height={100}
          />
          <Image
            className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
            alt="bg"
            width={100}
            height={100}
          />
          <div className="z-50 w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              The Freedom to Create the Pages You Want
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <div className="relative sm:w-2/3 w-11/12">
            <Image
              src="/bg.png"
              alt="Sample Page"
              role="img"
              width={1500}
              height={1500}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
