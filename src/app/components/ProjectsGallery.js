"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";
gsap.registerPlugin(ScrollTrigger);
const ProjectsGallery = () => {
  const projectSection = useRef(null);
  const projects = [
    {
      title: "Kestle",
      date: "2025",
      image: "/Picture/blueFace2.jpg",
      tags: ["VFX", "Animation"],
    },
    {
      title: "Synthwave",
      date: "2023",
      image: "/Picture/eagle.jpg",
      tags: ["3D Modeling", "Texturing"],
    },
    {
      title: "Bloobi",
      date: "2023",
      image: "/Picture/5.jpg",
      tags: ["3D Modeling", "Animation"],
    },
    {
      title: "Lamp Hole",
      date: "2023",
      image: "/Picture/4.2.jpg",
      tags: ["Web Dev", "Web Design"],
    },
    {
      title: "Vodo Genesis",
      date: "2024",
      image: "/Picture/2.1.jpg",
      tags: ["Web 3", "NFT"],
    },
  ];

  useGSAP(() => {
    const dum = gsap.timeline({
      scrollTrigger: {
        trigger: projectSection.current,
        start: "top 0%",
        end: "+=3000",

        scrub: true,
        pin: true,
      },
    });
    dum.to(
      ".project",
      {
        //  stagger: 0.7,
        stagger: (index) => 0.65 * (index + 1),

        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
      },
      "anim"
    );
    dum.from(
      ".project",
      {
        x: (index) => (index % 2 === 0 ? "0vw" : "-0vw"),

        z: (index) => `${(1 + index) * -400}px`,

        //  stagger: 0.7,
        stagger: (index) => 0.6 * (index + 1),

        duration: 2,
      },
      "anim"
    );
  }, []);
  return (
    <section
      ref={projectSection}
      style={{ transformStyle: "preserve-3d", perspective: 200 }}
      className="w-full cursor-pointer  relative h-[100dvh]   mobile:h-screen bg-red-600 flex justify-center   overflow-hidden "
    >
      <AnimatedGradient opacity={"opacity-0"} />
      <div
        style={{
          filter: "blur(350px)",
        }}
        className="Overlay-1 absolute w-full  h-full  bg-accent  z-0"
      ></div>
      <div className="Overlay-2 absolute opacity-15 w-full card h-full     z-0"></div>

      <h1 className=" absolute   p-3 w-full text-center  mt-[1em]  text-bg uppercase font-headingSemiBold text-xl mobile:text-lg">
        Projects
      </h1>
      <h1 className=" absolute   p-3 w-full text-left bottom-0 mt-[1em]  text-bg/70 uppercase font-headingSemiBold text-xl mobile:text-xs">
        Synthex
      </h1>
      <h1 className=" absolute text-right bottom-0  p-3 w-[20%] mobile:w-[50%] right-0  mt-[1em]  text-bg/70 uppercase font-heading text-sm mobile:text-xs">
        // A bundle of projects , each made with the goal of elevating a brand
        in digital space
      </h1>

      {projects.map((project, index) => (
        <div
          key={index * 0.0022}
          style={{
            transform: "translateZ(250px)",
            transformStyle: "preserve-3d",
            filter: "blur(100px)",
            zIndex: Math.max(50 - index * 10, 10), // Decreasing z-index, minimum 10
          }}
          className={`project transition-opacity opacity-0 ease-linear duration-75 group cursor-pointer text-bg flex flex-col items-center  top-[32%] tablet:top-[38%] mobile:top-[35%] -translate-x-[50%] -translate-y-[50%] absolute ${
            index % 2 === 0
              ? "mr-[17em] tablet:mr-[18em] mobile:mr-[17em] "
              : "ml-[17em] tablet:ml-[18em] mobile:ml-[17em]"
          }`}
        >
          {/* Title and Date */}
          <div className="project__content flex items-center justify-between w-full">
            <h2 className="font-heading uppercase text-[.7vw] tablet:text-[1.2vw] mobile:text-[4vw]">
              {project.title}
            </h2>
            <h2 className="font-heading text-[.5vw] tablet:text-[1vw] mobile:text-[3.8vw]">
              {project.date}
            </h2>
          </div>

          {/* Image Section */}
          <div className="w-[250px] h-[250px]   flex items-center justify-center bg-bg/10 relative overflow-hidden">
            <button className="View__button opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-300 z-20 relative bg-bg/20 px-[.5em] rounded-sm py-[.1em]">
              <span className="absolute -top-1 -left-1 w-1 h-1 border-t-[1px] border-l-[1px] border-bg/30"></span>
              <span className="absolute -top-1 -right-1 w-1 h-1 border-t-[1px] border-r-[1px] border-bg/30"></span>
              <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b-[1px] border-l-[1px] border-bg/30"></span>
              <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b-[1px] border-r-[1px] border-bg/30"></span>

              <h2 className="font-heading text-[.7vw] tablet:text-[1.2vw] mobile:text-[4vw] tracking-wider">
                View
              </h2>
            </button>
            <div className="overlay z-10 opacity-0 absolute w-full h-full bg-black group-hover:opacity-50 transition-opacity ease-linear duration-300"></div>
            <Image
              alt={project.title}
              src={project.image}
              width={2000}
              height={1556}
              priority={false}
              className="object-cover p-2 absolute w-full h-full"
            />
            <AnimatedGradient opacity={"opacity-35"} />
          </div>

          {/* Tags Section */}
          <div className="project__content--2 text-textrotat flex items-center justify-start space-x-[1em] w-full">
            {project.tags.map((tag, tagIndex) => (
              <h2
                key={tagIndex * 0.0023}
                className="font-heading text-[.7vw] tablet:text-[1.2vw] mobile:text-[4vw]"
              >
                {tag}
              </h2>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsGallery;
