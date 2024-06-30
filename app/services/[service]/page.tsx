import Navbar from "@/app/components/Navbar";
import Services from "@/app/components/Services";
import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params: { service } }: { params: { service: string } }) => {
  const serviceContent = services.filter(
    (ser) => ser.title === decodeURIComponent(service)
  )[0];
  return (
    <>
      <section className="min-h-screen h-full w-full bg-white">
        <div className=" relative rounded-b-3xl bg-gray-100 overflow-y-hidden ">
          <Navbar />
          <div className="w-full h-full">
            <div className="  h-1/2   overflow-hidden relative  bg-gray-900  mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
              <Image
                src={"/hero.jpg"}
                alt="hero"
                quality={100}
                width={2000}
                height={2000}
                className="absolute scale-up z-0 w-full h-full object-cover top-0 opacity-80"
              />
            </div>
          </div>
          <div className="absolute   w-full bottom-12">
            <div className=" w-full max-w-screen-xl mx-auto">
              <h3 className="hidden md:blocktext-[40px] font-light text-white/95 px-5">
                {decodeURIComponent(service)}
              </h3>
            </div>
          </div>
        </div>
        {/* CONTENTE  */}
        <div className="max-w-screen-xl mx-auto px-6  my-16 text-gray-800  ">
          <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={`${serviceContent.image}`}
                alt={serviceContent.title}
                width={400}
                height={400}
                className="hover:scale-105 transition-all duration-300"
              />
            </div>
            <div>
              <h5 className="text-3xl font-medium text-btn">
                {decodeURIComponent(service)}
              </h5>
              <p className="mt-5 md:text-lg leading-[35px] md:mr-10 text-gray-700">
                {serviceContent.content}
              </p>
              <Link href={"/#contact"}>
                <button className="py-3 px-5 border border-green-900   mt-5 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-16 ">
            <h4 className="my-5 text-3xl font-medium text-btn">Platforms</h4>
            <div className="  gap-5 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceContent.subData?.map((item) => (
                <div className="bg-gray-50 shadow-md py-9 rounded-xl  hover:translate-y-2 transition-all duration-300  p-4">
                  <h5 className="text-lg font-medium">{item.title}</h5>
                  <p className="mt-3 text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Services isMain={false} />
      </section>
    </>
  );
};

export default page;
