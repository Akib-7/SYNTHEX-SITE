"use client";

import gsap from "gsap";
import React from "react";

import { useGSAP } from "@gsap/react";
import GradientImage from "./GradientImage";
const NFTMarquee = () => {
  const nftItems = [
    {
      name: "CyberPunk NFT",
      image: "blueFace.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
    {
      name: "Neon Samurai",
      image: "sculpture.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
    {
      name: "Futuristic AI",
      image: "panda.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
    {
      name: "Meta Warrior",
      image: "eagle.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },

    {
      name: "Crypto Phantom",
      image: "blueFace2.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
    {
      name: "Hologram Beast",
      image: "3.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
    {
      name: "Digital Guardian",
      image: "tiger.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
    {
      name: "Vortex Phantom",
      image: "bull.jpg",
      aspectWidth: "2000",
      aspectHeight: "1556",
    },
  ];

  useGSAP(() => {
    const nftAnimation = gsap.timeline();
    nftAnimation.to(
      ".NFT__marquee--container ",

      {
        x: "-100%",
        duration: 30,
        repeat: -1,
        ease: "linear",
      }
    );
  });

  return (
    <div className="w-full relative bg-black pt-[4em] pb-[18em] mobile:pb-[8em]  flex items-center justify-center">
      <div className="  text-text  ">
        <div className="z-20 ALL_MARQUEES_CONTAINER flex w-screen   overflow-x-hidden    ">
          <div className="flex  flex-shrink-0  NFT__marquee--container    ">
            {nftItems.map((item, index) => (
              <div
                key={index * 0.0334}
                className="flex pr-20  flex-col items-center"
              >
                <GradientImage
                  alt={"a picture of futuristic robot holding a purse"}
                  name={item.image}
                  aspectWidth={item.aspectWidth}
                  aspectHeight={item.aspectHeight}
                  imageSizes="w-[300px] h-[300px]  mobile:w-[200px] mobile:h-[200px]   "
                  objectFit="object-cover bg-black object-center"
                  flip={1}
                  color={"bg-black"}
                  saturate={1}
                />
                <h1 className="font-heading text-black "> {item.name}</h1>
              </div>
            ))}
          </div>
          <div className="flex  flex-shrink-0 NFT__marquee--container    ">
            {nftItems.map((item, index) => (
              <div
                key={index * 0.039}
                className="flex pr-20 flex-col items-center"
              >
                <GradientImage
                  alt={"a picture of futuristic robot holding a purse"}
                  name={item.image}
                  aspectWidth={item.aspectWidth}
                  aspectHeight={item.aspectHeight}
                  imageSizes="w-[300px] h-[300px]   mobile:w-[200px] mobile:h-[200px]   "
                  objectFit="object-cover object-center"
                  flip={1}
                  color={"bg-black"}
                  saturate={1}
                />
                <h1 className="font-heading text-black "> {item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTMarquee;
