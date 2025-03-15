"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import AnimatedGradient from "./AnimatedGradient";

const Purpose = () => {
  useGSAP(() => {
    const arrowAnimation4 = gsap.timeline({ repeat: -1 });

    arrowAnimation4
      .to(".arrow__text4", { opacity: 1, duration: 0.3, stagger: 0.3 }) // Show one by one
      .to(".arrow__text4", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.3,
      }); // Hide all one by one
    const arrowAnimation3 = gsap.timeline({ repeat: -1 });

    arrowAnimation3
      .to(".arrow__text3", { opacity: 1, duration: 0.3, stagger: -0.3 }) // Show one by one
      .to(".arrow__text3", {
        opacity: 0,
        duration: 0.3,
        stagger: -0.3,
      }); // Hide all one by one
  }, []);

  return (
    <section className="w-full mt-[10%]   relative flex h-fit mobile:h-[70vh]   bg-black  py-[15em] mobile:py-[7em]">
      <AnimatedGradient opacity={"opacity-0"} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 35 35"
        className="absolute -top-1 left-0 w-[5%] rotate-[180deg]"
      >
        <path
          d="M4.27968 35C5.91851 35 7.48943 34.3367 8.6431 33.1575L33.2199 8.03762C34.3605 6.87207 35 5.29743 35 3.65645L35 -1.69568e-07L35 35L0 35L4.27968 35Z"
          fill="#DDDDDD"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 35 35"
        className="absolute -top-1 right-0 w-[5%] rotate-[-90deg]"
      >
        <path
          d="M4.27968 35C5.91851 35 7.48943 34.3367 8.6431 33.1575L33.2199 8.03762C34.3605 6.87207 35 5.29743 35 3.65645L35 -1.69568e-07L35 35L0 35L4.27968 35Z"
          fill="#DDDDDD"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 35 35"
        className="absolute bottom-0 z5 -left-[2px] w-[5%] rotate-[90deg]"
      >
        <path
          d="M4.27968 35C5.91851 35 7.48943 34.3367 8.6431 33.1575L33.2199 8.03762C34.3605 6.87207 35 5.29743 35 3.65645L35 -1.69568e-07L35 35L0 35L4.27968 35Z"
          fill="#DDDDDD"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 35 35"
        className="absolute bottom-0 -right-[2px] w-[5%] rotate-[0deg]"
      >
        <path
          d="M4.27968 35C5.91851 35 7.48943 34.3367 8.6431 33.1575L33.2199 8.03762C34.3605 6.87207 35 5.29743 35 3.65645L35 -1.69568e-07L35 35L0 35L4.27968 35Z"
          fill="#DDDDDD"
        ></path>
      </svg>
      <p className="font- uppercase text-xs tablet:text-xl mobile:text-xs text-bg/60 absolute top-[5%] left-[5%]">
        [ purpose ]
      </p>

      <div className="w-[85%] relative z-20   mx-auto">
        <div className="purpose__hook--text   w-[100%] mx-auto">
          <h1 className="w-full text-bg leading-[0.9em] mobile:leading-[1.5em] font-headingSemiBold uppercase tracking-tighter text-[8vw] laptop:text-[12vw] tablet:text-[10vw] mobile:text-[10vw]">
            <p className="w-full flex flex-wrap justify-between">
              <span>elevating </span>
              <span>brands </span>
            </p>
            <p className="w-full text-center block">in digital</p>
            <p className="w-full text-right block">
              <span className="text-accent">⌖</span> Space
            </p>
            <p className="w-full flex flex-wrap justify-between">
              <span>via </span>
              <span>impactful </span>
            </p>
            <p className="w-full flex flex-wrap justify-center items-center">
              {`>>>`.split("").map((letter, index) => (
                <span
                  className="arrow__text4 text-[5vw] mobile:text-2xl opacity-0 font-pixel text-accent inline-block"
                  key={index * 0.07}
                >
                  {letter}
                </span>
              ))}{" "}
              <span className="mx-[.5em]">3d assets</span>
              {`<<<`.split("").map((letter, index) => (
                <span
                  className="arrow__text3 text-[5vw] mobile:text-2xl opacity-0 font-pixel text-accent inline-block"
                  key={index * 0.072}
                >
                  {letter}
                </span>
              ))}{" "}
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
