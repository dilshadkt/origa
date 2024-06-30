"use client";
import Image from "next/image";
import React from "react";

const Whatsapp = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = "+918129164869";
    const message = "Hello Origa!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };
  return (
    <div
      onClick={redirectToWhatsApp}
      className="fixed bottom-7 md:bottom-5 cursor-pointer w-12 h-12 md:w-16 md:h-16 bg-green-500 group z-50 rounded-full right-5 flex items-center justify-center shadow-xl"
    >
      <Image
        src={"whatsapp.svg"}
        alt="whatsapp"
        width={25}
        height={25}
        className="group-hover:scale-125 transition-all duration-300"
      />
    </div>
  );
};

export default Whatsapp;
