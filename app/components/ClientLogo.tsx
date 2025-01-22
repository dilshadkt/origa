"use client";
import Image from "next/image";
import React from "react";

const ClientLogo = () => {
  const logos = [
    { src: "/delta.png", alt: "Delta Logo" },
    { src: "/CapitalMarket.svg", alt: "Capital Market Logo" },
    { src: "/zyrus.png", alt: "Zyrus Logo" },
    { src: "/farwish.jpg", alt: "Farwish Logo" },
    { src: "/flora.png", alt: "Flora Logo" },
    { src: "/Valluvanad.png", alt: "Valluvanad Logo" },
    { src: "/30india.jpg", alt: "Farwish Logo" },
    { src: "/tot.png", alt: "Farwish Logo" },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Partnering for growth
        </h2>

        <div className="relative mt-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Slider Container */}
          <div className="relative flex items-center h-40 overflow-hidden">
            {/* First Slider - Original */}
            <div className="flex items-center gap-16 animate-infinite-scroll">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex justify-center items-center min-w-[150px] h-28 px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className="w-auto h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Second Slider - Clone */}
            <div className="flex items-center gap-16 animate-infinite-scroll">
              {logos.map((logo, index) => (
                <div 
                  key={`clone-${index}`}
                  className="flex justify-center items-center min-w-[150px] h-28 px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className="w-auto h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;

// import Image from "next/image";
// import React from "react";

// const ClientLogo = () => {
//   return (
//     <div className="bg-white py-6 sm:py-8 lg:py-12">
//       <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
//           Partnering for growth
//         </h2>

//         <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
//           {/* <!-- logo - start --> */}
//           <div className="flex justify-center text-gray-400 overflow-hidden">

//           <Image
//             className="cursor-pointer w-16 width-full height-full object-contain"
//             src="/delta.png"
//             alt="logo"
//             width={400}
//             height={400}
//           />
         
         
           
//           </div>
//           {/* <!-- logo - end --> */}

//           {/* <!-- logo - start --> */}
//           <div className="flex justify-center text-gray-400 overflow-hidden">
//           <Image
//             className="cursor-pointer w-16 width-full height-full object-contain"
//             src="/CapitalMarket.svg"
//             alt="logo"
//             width={400}
//             height={400}
//           />
//           </div>
//           {/* <!-- logo - end --> */}

//           {/* <!-- logo - start --> */}
//           <div className="flex justify-center text-gray-400 overflow-hidden">
//           <Image
//             className="cursor-pointer w-16 width-full height-full object-contain"
//             src="/zyrus.png"
//             alt="logo"
//             width={400}
//             height={400}
//           />
//           </div>
//           {/* <!-- logo - end --> */}

//           {/* <!-- logo - start --> */}
//           <div className="flex justify-center text-gray-400 overflow-hidden">
//           <Image
//             className="cursor-pointer w-16 idth-full height-full object-contain"
//             src="/farwish.jpg"
//             alt="logo"
//             width={400}
//             height={400}
//           />
//           </div>
//           {/* <!-- logo - end --> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientLogo;
