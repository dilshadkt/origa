import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";

const statVarients = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
const Stat = () => {
  return (
    <section className="bg-white">
      <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container ">
        <h1 className="xl:text-5xl xl:leading-[60px] md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          More Than 2 Years We Provide Service{" "}
          <br className="md:block hidden capitalize" />
          in information technology.
        </h1>
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          <Image
            src="/map.png"
            alt="world map image"
            width={1200}
            height={1200}
            className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
          />
          <Image
            src="/map-bg.png"
            alt="mobile-image"
            width={1200}
            height={1200}
            className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
          />
          <MotiionDiv
            variants={statVarients}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.15,
              ease: "easeInOut",
              duration: 0.75,
            }}
            viewport={{ once: true }}
            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12"
          >
            <p className="text-3xl font-semibold text-gray-800">2K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Recently Property Listed
            </p>
          </MotiionDiv>
          <MotiionDiv
            variants={statVarients}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.35,
              ease: "easeInOut",
              duration: 0.75,
            }}
            viewport={{ once: true }}
            className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto  bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12"
          >
            <p className="text-3xl font-semibold text-gray-800">1K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Active Listening
            </p>
          </MotiionDiv>
          <MotiionDiv
            variants={statVarients}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.25,
              ease: "easeInOut",
              duration: 0.75,
            }}
            viewport={{ once: true }}
            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24"
          >
            <p className="text-3xl font-semibold text-gray-800">3K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Recently Sold Lands
            </p>
          </MotiionDiv>
        </div>
      </div>
    </section>
  );
};

export default Stat;
