"use client";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NftSection = () => {
  const nftSection = useRef(null);

  useGSAP(() => {
    // SERVICES TEXT REVEAL ANIMATION--
    gsap.from(".nft--text", {
      opacity: 0,

      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: nftSection.current,
        start: "top 70%",
        end: "+=400",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={nftSection}
      className="w-full h-fit pt-[10%] relative z-20  bg-black text-bg  pb-[8em] mobile:pb-[5em]  "
    >
      <div className=" w-[80%] pt-[8em] mobile:pt-[5em] h-fit  flex flex-col justify-center  mx-auto ">
        <h1
          style={{
            lineHeight: "0.9em",
          }}
          className=" text-[8vw] laptop:text-[10vw]  text-center uppercase tracking-tighter font-headingSemiBold mobile:text-[13vw]"
        >
          nft spotlight
        </h1>
        <p className="w-[35%] mt-[4em] laptop:mt-[3em] overflow-hidden font-heading text-lg  laptop:text-2xl laptop:leading-[1.2em]  tablet:text-3xl  mobile:text-base  laptop:w-[60%] tablet:w-[100%] mobile:w-[100%] ">
          {`While we don’t mint NFTs, our expertise in 3D modeling, texturing, and digital artistry has powered some of the most successful NFT projects.`
            .split(" ")
            .map((item, index) => (
              <span key={index * 0.031} className="nft--text inline-block pr-1">
                {item}
              </span>
            ))}
        </p>
      </div>
    </section>
  );
};

export default NftSection;
