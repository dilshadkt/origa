import { services } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="expertice" className="bg-gray-100">
      <div className="container py-16  max-w-screen-xl mx-auto  m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Your Perfect Business Solution
        </h2>
        <div className="mx-auto  pt-10  grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={nanoid()}
              className="border border-gray-100  hover:scale-105 transition-all duration-700 rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10
lg:px-8 sm:px-12"
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600 leading-7">
                  {service.descritpion}
                </p>
              </div>

              <Image
                src={service.image}
                alt=""
                width={900}
                height={600}
                className="ml-auto w-2/3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
