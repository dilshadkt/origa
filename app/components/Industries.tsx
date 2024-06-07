import { industries } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";

const Industries = () => {
  return (
    <section
      id="industries"
      className="bg-white  py-32 flex flex-col items-center justify-center "
    >
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-5 lg:text-3xl px-6  md:px-12 xl:px-0">
        Enhance Your Productivity with Our Integration Solutions
      </h2>
      <p className="text-gray-600 max-w-screen-md text-center text-base md:text-[20px] leading-7 md:leading-9 font-light">
        From Web Design and Development to Digital Marketing, we'll boost your
        traffic by 50%, generate more leads, and increase sales.
      </p>
      <div className="max-w-screen-xl my-10 mx-auto grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-6  bg-white w-full">
        {industries.map((item) => (
          <div
            key={nanoid()}
            className="h-[100px] hover:-translate-y-2 transition-all duration-700 rounded-full bg-gradient-to-r from-gray-100 to-gray-50/50 p-3 text-black flex items-center justify-between"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center ">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                quality={100}
              />
            </div>
            <span className="flex items-center justify-start pl-5 font-semibold text-gray-900 flex-1">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
