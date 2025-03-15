"use client";
import gsap from "gsap";
import React from "react";

import { useGSAP } from "@gsap/react";

const Marquee = () => {
  const marqueeItems = [
    "NFT ⌖ ",
    "METAVERSE ⌖ ",
    "3D ⌖ ",
    "WEB3 ⌖ ",

    "DIGITAL ⌖ ",
    "VFX ⌖ ",
    "MODELLING ⌖ ",
    "METAVERSE ⌖ ",
    "3D ⌖ ",
    "VFX ⌖ ",
    "DIGITAL ⌖ ",
    "WORLD ⌖ ",
    "WEB3 ⌖ ",
  ];

  useGSAP(() => {
    gsap.to(
      ".marquee-container",

      {
        x: "-100%",
        duration: 30,
        repeat: -1,
        ease: "linear",
      }
    );
  });

  return (
    <div className="mt-[0em]  bg-bg  text-bg ">
      <div className="flex z-50   w-screen   overflow-x-hidden py-[.5em] text-[1.2vw] tablet:text-[2.3vw] mobile:text-[3vw]    font-heading    bg-text mobile:py-[0.5em]   ">
        <div className="flex  flex-shrink-0 marquee-container     ">
          {marqueeItems.map((item, index) => (
            <h1
              style={{ wordSpacing: "0.5em" }}
              className="pr-10   tracking-wider"
              key={index * 0.001}
            >
              {item}
            </h1>
          ))}
        </div>{" "}
        <div className="flex  flex-shrink-0 marquee-container     ">
          {marqueeItems.map((item, index) => (
            <h1
              style={{ wordSpacing: "0.5em" }}
              className="pr-10   tracking-wider"
              key={index * 0.002}
            >
              {item}
            </h1>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Marquee;
