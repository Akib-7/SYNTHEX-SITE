import React from "react";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection2 = () => {
  useGSAP(() => {
    const arrowAnimation = gsap.timeline({ repeat: -1 });

    arrowAnimation
      .to(".arrow__text", { opacity: 1, duration: 0.3, stagger: 0.3 }) // Show one by one
      .to(".arrow__text", { opacity: 0, duration: 0.3, stagger: 0.3 });
  }, []);
  return (
    <section className="w-full  bg-bg relative h-[110vh] laptop:h-[90vh]  bg-black/0 tablet:h-[90vh]  mobile:min-h-[100vh] ">
      <div className="Grid__layout opacity-0  w-full px-5 absolute top-0  h-full">
        <div className="grid grid-cols-12 h-full gap-5">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index * 0.073}
              className="bg-blue-400 h-full flex items-center justify-center text-gray-700 font-semibold"
            ></div>
          ))}
        </div>
      </div>
      <h1 className="headline   font-headingSemiBold mobile:font-headingBold text-[7vw]  laptop:text-[12vw] mobile:text-[9.3vw]  text-text  pt-[1em]  laptop:pt-[0.5em] mobile:pt-[11em] flex flex-col -space-y-[.3em] tablet:-space-y-[.2em] w-[84%] tablet:w-[90%] mx-auto">
        <p
          style={{ lineHeight: "1em" }}
          className="w-[85%] mobile:w-[100%]    uppercase tracking-tighter "
        >
          {" "}
          W<span className=" ">e</span> Build Imme
          <span className="">r</span>sive
        </p>
        <p className="w-full  flex justify-between mobile:justify-center   uppercase tracking-tighter t">
          <span className="">
            <span className="font-h ml-[1em] mobile:ml-0">3</span>
            <span className="font-hea">d</span>
          </span>
          <span className="mobile:ml-2">
            {" "}
            Vi<span className="">s</span>u<span className="">a</span>ls{" "}
            <span className="">⌖</span>
          </span>
        </p>
      </h1>
      <div className="cta__section mt-[8em] tablet:mt-[5em] mobile:mt-[5%]  flex flex-col  space-y-[1em] laptop:space-y-[1em] mobile:space-y-[1em] w-[84%] tablet:w-[90%] mx-auto">
        <p className="font-heading  text-[1.2vw] z-30 laptop:text-2xl mobile:text-[4vw] tablet:text-3xl tablet:leading-[1.2em]   w-[35%]  laptop:w-[50%] mobile:w-[80%] ">
          Whether it’s digital ownership, futuristic branding, or interactive
          experiences, we ace the job via high-quality 3D visuals.
        </p>
        <AnimatedButton text={"Explore"} />
      </div>
      <div className="mask bg-lime-300/0  w-full h-full flex items-end  absolute top-[4%] laptop:top-[9%] mobile:top-0 ">
        <div className="hero__section--image  absolute z-0  left-1/2 laptop:left-[70%] mobile:left-1/2 mobile:top-0 -translate-x-[50%] w-[75%] mobile:w-[90%]      h-[100vh] laptop:h-[70vh] tablet:h-[70vh] mobile:h-[50vh]   ">
          <Image
            src="/Picture/robot2.png"
            width="1143"
            height="2000"
            priority
            style={{ filter: "saturate(0)" }}
            alt="a picture of futuristic 3d robot"
            className="object-contain object-center  w-full z-0 bottom-0 mobile:top-0  absolute h-[95%] laptop:h-[95%] "
          />
        </div>
        <div className="pixel__mask   w-full h-[23vh] laptop:h-[10vh] tablet:h-[15vh] mobile:h-[18vh] mobile:top-[5vh] mix-blend-darken flex bg-accent/90  relative  z-0  mobile:bottom-[0em]">
          <span className="w-[25%] h-[20%] z-10 bg-bg absolute -top-2 left-0"></span>
          <span className="w-[7%] mobile:w-[10%] z-10 h-[30%] bg-bg absolute -top-2 right-[18%] mobile:right-[25%]"></span>
          <span className="w-[4%] h-[20%] bg-bg z-10 absolute -top-2 mobile:hidden  right-[28%]"></span>
          <span className="w-[10%] mobile:w-[18%] h-[60%] flex items-start justify-center   mobile:h-[120%]  z-10 bg-accent/90 absolute right-[0%] -top-[60%] mobile:-top-[120%]">
            <p
              style={{ letterSpacing: "-0.15em" }}
              className="Scroll__Indicator rotate-90 mt-[1em] z-10   text-[#DDDDDD]     text-4xl laptop:text-[40px]  tablet:text-[30px] mobile:text-[7vw] tracking-tighter font-pixel"
            >
              {`>>>`.split("").map((letter, index) => (
                <span
                  className="arrow__text   opacity-0 z-10 inline-block"
                  key={index * 0.074}
                >
                  {letter}
                </span>
              ))}{" "}
            </p>
          </span>

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

          <p className="text-sm ml-[9%] laptop:ml-[5%] tablet:hidden z-10  text-[#DDDDDD]  mt-[.5%] w-[20%]">
            3D VISUALS TO INTERACTIVE VIRTUAL SPACES, WE ACE THE JOB WELL SINCE
            5 YRS
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
