"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);
const ContactUs = () => {
  const contactUs__hookRef = useRef();
  useGSAP(() => {
    const hookReveal = gsap.timeline({
      scrollTrigger: {
        trigger: contactUs__hookRef.current,
        start: "top 40%",
        end: "+=400",
        scrub: true, // Smooth animation for text
        toggleActions: "play none reverse none", // Instant height change
      },
    });

    hookReveal.from(".text__reveal", {
      y: 120,
      stagger: 0.2,
    });

    const arrowAnimationt = gsap.timeline({ repeat: -1 });

    arrowAnimationt
      .to(".arrow__text2", { opacity: 1, duration: 0.3, stagger: 0.3 }) // Show one by one
      .to(".arrow__text2", { opacity: 0, duration: 0.3, stagger: 0.3 }); // Hide one by one
  }, []);
  return (
    <section className="w-full z-20    group ">
      <div
        ref={contactUs__hookRef}
        className="contactUs__hook   relative  w-full"
      >
        <div className="pixel__mask--vertical-left card  absolute left-0 transition-all w-0 ease-in-out duration-500  group-hover:w-[4vh] h-full laptop:hidden flex bg-accent   z-0 mix-blend-darken ">
          <div className="w-full h-full relative">
            <span className="w-[45%] h-[25%] z-10 bg-bg absolute -right-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[50%] absolute -right-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[70%] absolute -right-1"></span>
          </div>
        </div>
        <div className="pixel__mask--vertical-right card  absolute right-0 transition-all w-0 ease-in-out duration-500  group-hover:w-[4vh] h-full laptop:hidden flex bg-accent   z-0 mix-blend-darken ">
          <div className="w-full h-full relative">
            <span className="w-[45%] h-[25%] z-10 bg-bg absolute -left-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[50%] absolute -left-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[70%] absolute -left-1"></span>
          </div>
        </div>
        <div className="pixel__mask--horizontal card  absolute scale-y-[-1] top-0 transition-all h-0 ease-in-out duration-500 w-full group-hover:h-[4vh]  laptop:hidden flex bg-accent   z-0 mix-blend-darken ">
          <div className="w-full h-full relative">
            <span className="w-[5%] h-[55%] z-10 bg-bg -top-1 absolute left-[30%]"></span>
            <span className="w-[5%] h-[55%] z-10 bg-bg -top-1 absolute left-[70%]"></span>
          </div>
        </div>
        <div className="contactUs__hook--text  pt-[15%] mobile:pt-[4em]  w-[85%] mx-auto">
          <h2
            style={{ lineHeight: "0.9em" }}
            className="font-headingSemiBold uppercase tracking-tighter text-[9vw] laptop:text-[12vw] tablet:text-[10vw] mobile:text-[16vw]"
          >
            <div className="overflow-hidden inline-block min-h-[0.8em] mobile:min-h-[1em]">
              <span className="text__reveal inline-block">
                W<span className="">a</span>nt <span className="">to</span>
              </span>
            </div>
            <br />
            <div className="overflow-hidden inline-block w-full min-h-[0.8em] mobile:min-h-[1em]">
              <span className="text__reveal  inline-block w-full text-center">
                elev<span className="">a</span>te{" "}
                <span className=" mobile:block text-center">
                  Y<span className="">our</span>
                </span>
              </span>
            </div>
            <br />
            <div className="flex w-full overflow-hidden min-h-[0.8em] mobile:min-h-[1em]">
              <span className="text__reveal">
                di<span className="">g</span>ital
              </span>
            </div>
            <div className="flex w-full overflow-hidden justify-end items-center min-h-[0.8em] mobile:min-h-[1em]">
              <span className="text__reveal">
                p<span className="">r</span>e<span className="">s</span>e
                <span className="">n</span>ce{" "}
                <span className="mobile:block text-center">?</span>
              </span>
            </div>
          </h2>

          <div className="w-full flex items-center justify-center mt-[10em] mobile:mt-[7em]">
            <p
              style={{ letterSpacing: "-0.15em" }}
              className=" rotate-90   text-accent     text-[3vw] laptop:text-[40px]   mobile:text-[8vw] tracking-tighter font-pixel"
            >
              {`>>>`.split("").map((letter, index) => (
                <span
                  className="arrow__text2    opacity-0 z-10 inline-block"
                  key={index * 0.0075}
                >
                  {letter}
                </span>
              ))}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="contactUs__form  relative  w-full pb-[10em]">
        <div className="pixel__mask--vertical-left card  absolute left-0 transition-all w-0 ease-in-out duration-500  group-hover:w-[4vh] h-full laptop:hidden flex bg-accent   z-0 mix-blend-darken ">
          <div className="w-full h-full relative">
            <span className="w-[45%] h-[25%] z-10 bg-bg absolute -right-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[50%] absolute -right-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[70%] absolute -right-1"></span>
          </div>
        </div>
        <div className="pixel__mask--vertical-right card  absolute right-0 transition-all w-0 ease-in-out duration-500 gro  group-hover:w-[4vh] h-full laptop:hidden flex bg-accent   z-0 mix-blend-darken ">
          <div className="w-full h-full relative">
            <span className="w-[45%] h-[25%] z-10 bg-bg absolute -left-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[50%] absolute -left-1"></span>
            <span className="w-[45%] h-[8%] z-10 bg-bg top-[70%] absolute -left-1"></span>
          </div>
        </div>
        <div className="pixel__mask--horizontal card  absolute bottom-0 transition-all h-0 ease-in-out duration-500 w-full group-hover:h-[4vh]  laptop:hidden flex bg-accent   z-0 mix-blend-darken ">
          <div className="w-full h-full relative">
            <span className="w-[5%] h-[55%] z-10 bg-bg -top-1 absolute left-[30%]"></span>
            <span className="w-[5%] h-[55%] z-10 bg-bg -top-1 absolute left-[70%]"></span>
          </div>
        </div>

        <div className="contactUs__form--text  pt-[12em] mobile:pt-[4em]  w-[80%] mx-auto">
          <h2
            style={{ lineHeight: "0.9em" }}
            className="font-headingSemiBold uppercase tracking-tighter text-[9vw] laptop:text-[12vw] tablet:text-[10vw] mobile:text-[16vw]"
          >
            Let’s Get it Done!
          </h2>
        </div>
        <div className="w-[80%] pt-[2em] mx-auto flex items-center justify-end ">
          <p className="  text-right bottom-0  p-3 w-[25%] laptop:w-[40%] mobile:w-[70%] right-0  mt-[1em]  text-text uppercase font-heading text-sm mobile:text-xs">
            // Project in mind? send us a message and Get ready to experience
            next level evolution of your brand.
          </p>
        </div>
        <div className="ContactUs__form--fields text-lg  laptop:text-2xl mobile:text-base font-heading mt-[1em] space-y-4 w-[50%] laptop:w-[70%] mx-auto  ">
          <div className="flex flex-col">
            <label className="text-text font-medium">Name</label>
            <input
              type="text"
              className="border-0 bg-bg border-b-2 border-dashed border-gray-400 focus:outline-none focus:border-gray-700 transition-all duration-300 p-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-text font-medium">Email</label>
            <input
              type="email"
              className="border-0 bg-bg border-b-2 border-dashed border-gray-400 focus:outline-none focus:border-gray-700 transition-all duration-300 p-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-text font-medium">Message</label>
            <textarea
              rows="3"
              className="border-0 bg-bg border-b-2 border-dashed border-gray-400 focus:outline-none focus:border-gray-700 transition-all duration-300 p-1 resize-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full mx-auto flex items-center justify-center mt-[3em]">
          <AnimatedButton text={"submit"} />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
