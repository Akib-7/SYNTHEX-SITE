"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedGradient from "./AnimatedGradient";
import GradientImage from "./GradientImage";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);
const WorksSection = () => {
  const mainSection = useRef(null);
  const cardRef = useRef(null);
  // SERVICE CARDS ANIMATION
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSection.current,
        start: "top 0%",
        end: "+=2700",
        scrub: 1,

        markers: true,
        pin: true,
      },
    });

    tl.from(".CardObject", {
      xPercent: 150,
      yPercent: 70,
      scale: 0.5,
      opacity: 0,
      rotateY: "70deg",
      stagger: 0.7, // Stagger entrance of cards
      duration: 1,
    }).to(
      ".CardObject",
      {
        xPercent: -130,
        yPercent: -70,
        scale: 0.5,
        opacity: 0,
        rotateY: "-60deg",
        stagger: {
          each: 0.7, // Move each card immediately after entering
          from: "start",
        },
        duration: 1,
      },
      "-=2.1"
    ); // Overlaps the exit animation slightly with entrance
  }, []);

  return (
    <>
      <section className="w-full h-screen py-[8em] relative  min-h-[100vh] bg-[#292828]"></section>
      {/* ANIMATED CARDS SPIRAL SECTION */}
      {/* <section
        ref={mainSection}
        style={{ perspective: 1000 }}
        className="w-full h-screen py-[8em] flex items-center justify-center relative   bg-[#d3d3d3]"
      >
        <div
          ref={cardRef}
          className="CardObject absolute  flex items-center justify-center w-[25vw] h-[26vw] rounded-lg bg-[#ec4747]"
        >
          <h1 className="text-2xl text-black font-text uppercase">CARD</h1>
        </div>
        <div
          ref={cardRef}
          className="CardObject absolute  flex items-center justify-center w-[25vw] h-[26vw] rounded-lg bg-[#ec4747]"
        >
          <h1 className="text-2xl text-black font-text uppercase">CARD-2</h1>
        </div>
        <div
          ref={cardRef}
          className="CardObject absolute  flex items-center justify-center w-[25vw] h-[26vw] rounded-lg bg-[#ec4747]"
        >
          <h1 className="text-2xl text-black font-text uppercase">CARD-3</h1>
        </div>
        <div
          ref={cardRef}
          className="CardObject absolute  flex items-center justify-center w-[25vw] h-[26vw] rounded-lg bg-[#ec4747]"
        >
          <h1 className="text-2xl text-black font-text uppercase">CARD-4</h1>
        </div>

        <h1 className="absolute bottom-0 left-0">HELLO WORLD</h1>
      </section> */}
      <section className=" relative w-screen h-screen flex items-center justify-center space-x-5 bg-bg">
        <AnimatedButton />
        <GradientImage
          alt={"a picture of futuristic robot holding a purse"}
          name={"robot2"}
          width={400}
          height={400}
        />

        <p className="font-text">This is regular text.</p>
        <p className="font-textMedium">This is medium text.</p>
        <p className="font-headingBold text-5xl ">SYNTHEX.</p>
        <p className="font-heading ">( 3D ) VISUALS</p>
        <p className="font-pixel text-accent text-5xl">{">>>"}</p>
      </section>
      <section className="w-full h-screen py-[8em] relative  min-h-[100vh] bg-[#292828]"></section>
    </>
  );
};

export default WorksSection;
