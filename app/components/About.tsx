import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white text-black">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                width={1200}
                height={1200}
                quality={100}
                alt=""
                src="/about.jpg"
                className="absolute inset-0 h-full w-full object-cover rounded-r-lg"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl capitalize  sm:leading-[42px] font-semibold sm:text-3xl">
                Origa is a community of developers united by a shared vision to
                revolutionize the IT industry.
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                Our journey began with a simple idea: harness collaboration and
                creativity to deliver exceptional results. We believe innovation
                thrives where diverse perspectives and skills converge. That’s
                why our community of developers brings unique expertise and a
                relentless drive to push boundaries.
              </p>
              <p className="mt-4 text-gray-600 leading-7">
                At Origa, continuous learning, open communication, and mutual
                respect are core. We foster an environment where ideas are
                exchanged, challenges are embraced, and success is a collective
                achievement.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
