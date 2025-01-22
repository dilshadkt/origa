// "use client";
// import React from "react";
// import {
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
//   CarouselProvider,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import Image from "next/image";
// import { MotiionDiv } from "./shared/MotionDiv";
// const Testimonial = () => {
//   const varients = {
//     hidden: {
//       opacity: 0,
//       x: -200,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//     },
//   };
//   const headVarient = {
//     hidden: {
//       opacity: 0,
//       x: -300,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//     },
//   };
//   return (
//     <div className="bg-white ">
//       <MotiionDiv
//         variants={varients}
//         initial="hidden"
//         whileInView="visible"
//         transition={{
//           type: "spring",
//           damping: 10,
//           stiffness: 100,
//           delay: 0.15,
//           ease: "easeInOut",
//           duration: 0.25,
//         }}
//         viewport={{ once: true }}
//         className="flex items-center justify-between h-full w-full max-w-screen-2xl mx-auto overflow-hidden    absolute z-0"
//       >
//         <div className="w-1/3 bg-white h-full" />
//         <div className="w-4/6 ml-16 bg-gray-100 h-full" />
//       </MotiionDiv>
//       <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
//         <CarouselProvider
//           naturalSlideWidth={100}
//           naturalSlideHeight={100}
//           isIntrinsicHeight={true}
//           totalSlides={2}
//         >
//           <MotiionDiv
//             variants={headVarient}
//             initial="hidden"
//             whileInView="visible"
//             transition={{
//               type: "spring",
//               damping: 10,
//               stiffness: 100,
//               delay: 0.15,
//               ease: "easeInOut",
//               duration: 0.25,
//             }}
//             viewport={{ once: true }}
//           >
//             <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
//               What our customers are
//               <br />
//               saying
//             </h1>
//             <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
//               What our customers are saying
//             </h1>
//           </MotiionDiv>
//           <Slider>
//             <Slide index={0}>
//               <div className="flex">
//                 <div className="mt-14 md:flex">
//                   <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
//                     <img
//                       src="https://i.ibb.co/4g1D9cv/imgslider1.png"
//                       alt="image of profile"
//                       className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
//                     />
//                     <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
//                       <Image
//                         src={"/qutes.svg"}
//                         alt="comma"
//                         width={20}
//                         height={20}
//                       />
//                     </div>
//                   </div>
//                   <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
//                     <div>
//                       <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
//                         Some of the best work that was done!
//                       </h1>
//                       <p className="text-base font-medium leading-6 mt-4 text-gray-600">
//                       Our collaboration with Origa Networks has been nothing short of remarkable. Their commitment to delivering quality, along with their responsive support, has made a significant difference in our business operations
//                       </p>
//                     </div>
//                     <div className="md:mt-0 mt-8">
//                       <p className="text-base font-medium leading-4 text-gray-800">
//                       Ashique
//                       </p>
//                       <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
//                       CEO, Majees Kitchen
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Slide>
//             <Slide index={1}>
//               <div
//                 className="flex relative"
//                 style={{ transform: "translateX(0%)" }}
//               >
//                 <div className="mt-14 md:flex">
//                   <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
//                     <img
//                       src="https://i.ibb.co/4g1D9cv/imgslider1.png"
//                       alt="image of profile"
//                       className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
//                     />
//                     <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
//                       <img
//                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
//                         alt="commas"
//                       />
//                     </div>
//                   </div>
//                   <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
//                     <div>
//                       <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
//                       Exceptional Results, Every Time
//                       </h1>
//                       <p className="text-base font-medium leading-6 mt-4 text-gray-600">
//                       Our collaboration with Origa Networks has been nothing short of remarkable. Their commitment to delivering quality, along with their responsive support, has made a significant difference in our business operations.
//                       </p>
//                     </div>
//                     <div className="md:mt-0 mt-8">
//                       <p className="text-base font-medium leading-4 text-gray-800">
//                         Muhafis
//                       </p>
//                       <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
//                         CEO, WestBank
//                       </p>
//                     </div>  
//                   </div>
//                 </div>
//               </div>
//             </Slide>
//           </Slider>
//           <div className="flex items-center mt-8">
//             <ButtonBack
//               className="cursor-pointer "
//               role="button"
//               aria-label="previous slide"
//             >
//               <img
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
//                 alt="previous"
//               />
//             </ButtonBack>

//             <ButtonNext
//               role="button"
//               aria-label="next slide"
//               className="cursor-pointer ml-2"
//             >
//               <img
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
//                 alt="next"
//               />
//             </ButtonNext>
//           </div>
//         </CarouselProvider>
//       </div>
//     </div>




//Finsih
    // <div className="bg-white py-6 sm:py-8 lg:py-12">
    //   <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    //     <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
    //       What others say about us
    //     </h2>

    //     <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
    //       {/* <!-- quote - start --> */}
    //       <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
    //         <div className="text-center text-gray-600">
    //           “This is a section of some simple filler text, also known as
    //           placeholder text.”
    //         </div>

    //         <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
    //           <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
    //             <img
    //               src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
    //               loading="lazy"
    //               alt="Photo by Radu Florin"
    //               className="h-full w-full object-cover object-center"
    //             />
    //           </div>

    //           <div>
    //             <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
    //               John McCulling
    //             </div>
    //             <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
    //               CEO / Datadrift
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!-- quote - end --> */}

    //       {/* <!-- quote - start --> */}
    //       <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
    //         <div className="text-center text-gray-600">
    //           “This is a section of some simple filler text, also known as
    //           placeholder text.”
    //         </div>

    //         <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
    //           <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
    //             <img
    //               src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
    //               loading="lazy"
    //               alt="Photo by christian ferrer"
    //               className="h-full w-full object-cover object-center"
    //             />
    //           </div>

    //           <div>
    //             <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
    //               Kate Berg
    //             </div>
    //             <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
    //               CFO / Dashdash
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!-- quote - end --> */}

    //       {/* <!-- quote - start --> */}
    //       <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
    //         <div className="text-center text-gray-600">
    //           “This is a section of some simple filler text, also known as
    //           placeholder text.”
    //         </div>

    //         <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
    //           <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
    //             <img
    //               src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
    //               loading="lazy"
    //               alt="Photo by Ayo Ogunseinde"
    //               className="h-full w-full object-cover object-center"
    //             />
    //           </div>

    //           <div>
    //             <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
    //               Greg Jackson
    //             </div>
    //             <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
    //               CTO / Uptime
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!-- quote - end --> */}
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default Testimonial;
