import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";

const aboutVarients = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};
const aboutVarientsRight = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
};
const Features = () => {
  return (
    <div className="overflow-y-hidden bg-gray-100">
      <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
        <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">
          How it works?
        </h1>
        <div className="md:mt-24 f-f-p">
          <div className="hidden md:flex justify-center w-full">
            <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
              <MotiionDiv
                variants={aboutVarients}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: 0.15,
                  ease: "easeInOut",
                  duration: 0.75,
                }}
                viewport={{ once: true }}
                aria-label="sign up"
                role="img"
              >
                <Image
                  className="focus:outline-none mt-10"
                  src="/step1.svg"
                  alt="how it work"
                  width={120}
                  height={120}
                />
              </MotiionDiv>
              <div aria-label={"2"} role="img">
                <Image
                  className="focus:outline-none mt-24"
                  src="/two.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5 text-gray-900">
                  Plan and Develop
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                  Work closely with our expert team to plan and customize your
                  project.
                </h2>
              </div>
              <MotiionDiv
                variants={aboutVarients}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: 0.15,
                  ease: "easeInOut",
                  duration: 0.75,
                }}
                viewport={{ once: true }}
                aria-label="transactions"
                role="img"
              >
                <Image
                  className="focus:outline-none mt-24"
                  src="/step2.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </MotiionDiv>
              <img
                className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
              <div aria-label={"1"} role="img">
                <Image src={"/one.svg"} alt="one" width={50} height={50} />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5 text-gray-900">
                  Get Started
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                  Tell us about your project and goals, and we'll help you
                  choose the best service package for your needs.
                </h2>
              </div>
              <MotiionDiv
                variants={aboutVarientsRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: 0.15,
                  ease: "easeInOut",
                  duration: 0.75,
                }}
                viewport={{ once: true }}
                aria-label="wallet"
                role="img"
              >
                <Image
                  className="focus:outline-none mt-24"
                  src="/step2.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </MotiionDiv>
              <div aria-label={"3"} role="img">
                <Image
                  className="focus:outline-none mt-20"
                  src="/three.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5 text-gray-900">
                  Launch and Grow
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                  Our team will continuously optimize and update your services
                  to ensure maximum performance and growth.
                </h2>
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center w-full">
            <Image
              className="focus:outline-none mt-10"
              src="/step1.svg"
              alt="how it work"
              width={120}
              height={120}
            />
            <Image src={"/one.svg"} alt="one" width={50} height={50} />

            <div className="mt-10">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold text-gray-900">
                Get Started
              </h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                Tell us about your project and goals, and we'll help you choose
                the best service package for your needs.
              </h2>
            </div>
            <Image
              className="focus:outline-none mt-24"
              src="/step2.svg"
              alt=""
              width={120}
              height={120}
            />
            <Image src={"/two.svg"} alt="one" width={50} height={50} />
            <div className="mt-10">
              <h1 className="text-xl tracking-wide text-center leading-5 font-bold text-gray-900">
                Plan and Develop
              </h1>
              <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">
                Work closely with our expert team to plan and customize your
                project.
              </h2>
            </div>
            <Image
              className="focus:outline-none mt-24"
              src="/step2.svg"
              alt=""
              width={120}
              height={120}
            />
            <Image src={"/three.svg"} alt="one" width={50} height={50} />
            <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold text-gray-900">
                Launch and Grow
              </h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                Our team will continuously optimize and update your services to
                ensure maximum performance and growth.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
