import Image from "next/image";
import React from "react";

const ClientLogo = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Trusted by the Origa
        </h2>

        <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
          {/* <!-- logo - start --> */}
          <div className="flex justify-center text-gray-400 overflow-hidden">

          <Image
            className="cursor-pointer w-16 "
            src="/delta.png"
            alt="logo"
            width={400}
            height={400}
          />
         
         
           
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex justify-center text-gray-400 overflow-hidden">
          <Image
            className="cursor-pointer w-16 "
            src="/CapitalMarket.svg"
            alt="logo"
            width={400}
            height={400}
          />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex justify-center text-gray-400 overflow-hidden">
          <Image
            className="cursor-pointer w-16 "
            src="/westbank.jpg"
            alt="logo"
            width={400}
            height={400}
          />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex justify-center text-gray-400 overflow-hidden">
          <Image
            className="cursor-pointer w-16 "
            src="/farwish.jpg"
            alt="logo"
            width={400}
            height={400}
          />
          </div>
          {/* <!-- logo - end --> */}
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
