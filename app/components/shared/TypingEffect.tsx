"use client";
import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const lines = [
    "A Passion for Innovation, Pioneering the Future",
    "Crafted Solutions, Connected to Excellence.",
  ];
  const typingSpeed = 60; // milliseconds per character
  const lineDelay = 1000; // milliseconds to wait before typing next line

  useEffect(() => {
    const typeText = (line: any, index: any, text: any) => {
      if (index < line.length) {
        setText(text + line[index]);
        text += line[index];
        setTimeout(() => typeText(line, index + 1, text), typingSpeed);
      } else {
        setTimeout(() => {
          setText("");
          const nextLine = lines[(lines.indexOf(line) + 1) % lines.length];
          typeText(nextLine, 0, "");
        }, lineDelay);
      }
    };

    typeText(lines[0], 0, "");
  }, []);

  return (
    <h2
      className="text-4xl   leading-[45px] md:leading-[70px] 2xl:leading-[85px] w-[90%]  md:text-[3rem] 2xl:text-[3.5rem] text-center md:text-start lg:w-[90%]
     font-medium  text-white/90"
    >
      {text}
    </h2>
  );
};

export default TypingEffect;
