import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-100">
      <div className="container py-16  max-w-screen-xl mx-auto  m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Your Perfect Business Solution
        </h2>
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          <div
            className="border border-gray-100  rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10
        lg:px-8 sm:px-12"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Graphic Design
              </h3>
              <p className="mb-6 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>

            <Image
              src={"/graphic.svg"}
              alt=""
              width={900}
              height={600}
              className="ml-auto w-2/3"
            />
          </div>
          <div
            className="border border-gray-100  rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10
        lg:px-8 sm:px-12"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Graphic Design
              </h3>
              <p className="mb-6 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>

            <Image
              src={"/graphic.svg"}
              alt=""
              width={900}
              height={600}
              className="ml-auto w-2/3"
            />
          </div>
          <div
            className="border border-gray-100  rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10
        lg:px-8 sm:px-12"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Graphic Design
              </h3>
              <p className="mb-6 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>

            <Image
              src={"/graphic.svg"}
              alt=""
              width={900}
              height={600}
              className="ml-auto w-2/3"
            />
          </div>
          <div
            className="border border-gray-100  rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10
        lg:px-8 sm:px-12"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Graphic Design
              </h3>
              <p className="mb-6 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>

            <Image
              src={"/graphic.svg"}
              alt=""
              width={900}
              height={600}
              className="ml-auto w-2/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
