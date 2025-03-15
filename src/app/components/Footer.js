"use client";

import React, { useRef } from "react";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full z-10 h-[130vh] laptop:h-[80vh] tablet:h-[130vh]   relative  text-bg   pt-[10em]   bg-black  font-heading  ">
      <div className="w-[90%] mx-auto   upper flex items-start justify-between tablet:flex-col mobile:space-y-[5em]  ">
        <div className="email ">
          <p className="flex text-xs  items-center  space-x-[1em]">
            <span className="  animate-blink  bg-accent/90 w-[9px] h-[9px] mobile:h-[8px] mobile:w-[8px]"></span>
            <span>Email us at</span>
          </p>
          <p className="font-headingBold text-3xl  mobile:text-base">
            Synthex@digital.com
          </p>
        </div>

        <div className="flex  space-x-[4em]  footer__navigation  ">
          <p className="flex  text-xs  h-fit items-center  space-x-[1em]">
            <span className="  animate-blink  bg-accent/90 w-[9px] h-[9px] mobile:h-[8px] mobile:w-[8px]"></span>
            <span>Content</span>
          </p>
          <div className=" text-2xl mobile:text-base uppercase font-headingSemiBold">
            <p>home</p>
            <p>about us</p>
            <p>services</p>
            <p>projects</p>
          </div>
        </div>
        <div className="flex  space-x-[4em]  footer__navigation  ">
          <p className="flex text-xs  h-fit items-center  space-x-[1em]">
            <span className="  animate-blink  bg-accent/90 w-[9px] h-[9px] mobile:h-[8px] mobile:w-[8px]"></span>
            <span>Connect</span>
          </p>
          <div className=" text-2xl mobile:text-base uppercase font-headingSemiBold">
            <p>twitter</p>
            <p>Linkedin</p>
            <p>instagram</p>
            <p>discord</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] middle mt-[8em] mx-auto flex items-center justify-start   ">
        <div className="w-full flex    newsletter">
          <div className="newsletter__container flex w-full  space-x-[4em]    ">
            <p className="flex text-xs  h-fit items-center  space-x-[1em]">
              <span className="  animate-blink  bg-accent/90 w-[9px] h-[9px] mobile:h-[8px] mobile:w-[8px]"></span>
              <span>Newsletter</span>
            </p>
            <div className="flex flex-col w-[40%]">
              <label className=" font-medium">Email</label>
              <input
                type="email"
                className="border-0   bg-black border-b-2 border-dashed border-bg/20 focus:outline-none focus:border-gray-700 transition-all duration-300 p-1"
              />
              <div className="w-full mx-auto flex items-center mt-[1em]">
                <AnimatedButton text={"submit"} />
              </div>
            </div>
            <div className="newsletter__right  ">
              <p className="  text-right bottom-0  mobile:hidden  w-[45%] laptop:w-[40%] tablet:w-[90%] mobile:w-[70%] right-0    uppercase font-heading text-xs mobile:text-xs">
                // We offer high-end creative solutions for brands wanting to
                stand out into digital spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0   w-full">
        <div className="pixel__mask   w-full h-[18vh] laptop:h-[10vh] tablet:h-[12vh] mobile:h-[15vh] mobile:top-[5vh] flex bg-accent relative    z-0  mobile:bottom-[0em]">
          <span className="w-[15%] h-[20%] z-10 bg-black absolute -top-2 left-0"></span>
          <span className="w-[15%] h-[20%] z-10 bg-black absolute -top-2 right-0"></span>
          <h3 className="absolute left-1/2 -top-[1em] -translate-x-[50%] z-10  font-headingSemiBold uppercase tracking-tighter text-[15vw] laptop:text-[12vw] tablet:text-[15vw] mobile:text-[16vw]">
            <span className="font-pixel2">s</span>y
            <span className="font-pixel2">n</span>the
            <span className="font-pixel2">x</span>
          </h3>
          <div className="Barcode pt-[3%] tablet:pt-[5%] z-10 mobile:pt-[15%]  pl-[2.2%] flex flex-col laptop:space-y-3 mobile:space-y-1 ">
            <p className="text-heading  text-[#DDDDDD]  laptop:text-lg mobile:text-sm ">
              Digital Solutions supply @2025
            </p>

            <div className="relative bg-bg   flex items-center justify-center h-[22px]  w-[100px] ">
              <Image
                src="/Picture/barcode.png"
                width="1143"
                height="2000"
                priority
                style={{ filter: "invert(0)" }}
                alt="a picture of futuristic 3d robot"
                className="object-contain absolute  w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
