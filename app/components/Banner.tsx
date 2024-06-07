import React from "react";
import bannerImage from "@/public/banner (2).jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="relative text-black bg-[url(/banner2.jpg)] bg-cover bg-center bg-no-repeat">
      <Image
        src={bannerImage}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute     w-full h-full bg-gradient-to-r from-white/95 to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800">
            Fusing Creativity,
            <strong className="block font-extrabold text-rose-700 leading-[70px]">
              {" "}
              Connecting Brilliance.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed sm:leading-9 text-gray-900">
            At <strong>DELTA ORIGA</strong>, we blend creativity with strategic
            brilliance to push the boundaries of what's possible. With a
            commitment to excellence, we approach every project with innovative
            thinking and a dedication to success from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
