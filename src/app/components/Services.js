"use client";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GradientCard from "./GradientCard";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const mainSection = useRef(null);
  const services = [
    {
      name: "VFX",
      description:
        "We bring creative visions to life with cutting-edge 3D design, shaping futuristic aesthetics and immersive visuals",
    },
    {
      name: "3D Modeling",
      description:
        "We bring creative visions to life with cutting-edge 3D design, shaping futuristic aesthetics and immersive visuals",
    },
    {
      name: "Animation",
      description:
        "We bring creative visions to life with cutting-edge 3D design, shaping futuristic aesthetics and immersive visuals",
    },
    {
      name: "Texturing",
      description:
        "We bring creative visions to life with cutting-edge 3D design, shaping futuristic aesthetics and immersive visuals",
    },
  ];
  // SERVICE CARDS ANIMATION

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSection.current,
        start: "top 0%",
        end: "+=2700",
        scrub: 1,

        // markers: true,
        pin: true,
      },
    });
    tl.from(".CardObject:not(:first-child)", {
      // Exclude the first card
      xPercent: 150,
      yPercent: 0,
      scale: 0.5,
      opacity: 0,
      rotateY: "50deg",
      stagger: 0.7, // Stagger entrance of cards
      duration: 1,
    }).to(
      ".CardObject:not(:last-child)",
      {
        // Exclude the last card
        xPercent: -130,
        yPercent: -0,
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
    );

    // SERVICES TEXT REVEAL ANIMATION--
    gsap.from(".services--text", {
      opacity: 0,

      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: mainSection.current,
        start: "top 70%",
        end: "+=400",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={mainSection}
      className="w-full group h-screen  laptop:h-[80vh] tablet:h-screen relative     "
    >
      <p
        style={{ letterSpacing: "-0.15em" }}
        className=" service__indicator  tablet:hidden z-10 absolute left-[10%] top-1/2  -translate-y-[50%]   text-black     text-4xl laptop:text-[40px]  tablet:text-[30px] mobile:text-[7vw] tracking-tighter font-pixel"
      >
        {`>>>`}
      </p>

      <p className="absolute text-sm font-heading bottom-[8%] tablet:bottom-[5%] uppercase w-[20%] tablet:w-[40%] left-[4%] mobile:hidden">
        // We offer high-end creative solutions for brands wanting to stand out
        into digital spaces.
      </p>
      <div className=" w-[90%]  mx-auto flex tablet:flex-wrap   justify-end tablet:justify-center ">
        <div className="  w-[60%] tablet:w-[85%] mobile:w-[90%]  flex flex-col items-end    ">
          <div className="w-full tablet:pl-0 pl-[47%] laptop:pl-[20%]   flex flex-col space-y-[3%]">
            <h1 className="uppercase flex items-center  text-[5vw] mobile:text-[10vw] font-headingSemiBold tracking-tight">
              <span className="">s</span>e<span className="">r</span>vice{" "}
              <span className="">s</span>{" "}
              <span className=" inline-block animate-blink   bg-accent/90 ml-[.5em] w-[12px] h-[12px] mobile:h-[8px] mobile:w-[8px]"></span>
            </h1>
            <p className="overflow-hidden font-heading text-lg  laptop:text-2xl laptop:leading-[1.2em]  tablet:text-3xl  mobile:text-base mobile:w-[100%] ">
              {`We create digital experiences that bring ideas to life. From realistic 3D visuals to interactive virtual spaces, we turn concepts into engaging digital worlds.`
                .split(" ")
                .map((item, index) => (
                  <span
                    key={index * 0.03}
                    className="services--text inline-block pr-1"
                  >
                    {item}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATED CARDS SPIRAL SECTION */}
      <section
        style={{ perspective: 1000 }}
        className="w-full  h-[90dvh]  tablet:h-[50dvh] laptop:h-fit  mobile:h-[70dvh]  flex  justify-center relative   "
      >
        {services.map((service, index) => (
          <div
            key={service.name}
            className="CardObject mt-[0em] laptop:mt-[7em] w-fit h-fit absolute"
          >
            <GradientCard
              CardSizes={
                "h-[330px] w-[430px] laptop:w-[600px] laptop:h-[450px] mobile:w-[350px] mobile:h-[300px] "
              }
              title={service.name}
              serviceNumber={`0${index + 1}`}
              description={service.description}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Services;
