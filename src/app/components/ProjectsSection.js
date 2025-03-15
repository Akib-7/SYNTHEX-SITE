"use client";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projectsSection = useRef(null);

  useGSAP(() => {
    // SERVICES TEXT REVEAL ANIMATION--
    gsap.from(".projects--text", {
      opacity: 0,

      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: projectsSection.current,
        start: "top 70%",
        end: "+=400",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={projectsSection}
      className="w-full h-fit relative z-20 bg-bg   pb-[8em] mobile:pb-[5em]  "
    >
      <div className=" w-[80%] pt-[8em] mobile:pt-[5em] h-fit  flex flex-col justify-center  mx-auto ">
        <h1
          style={{
            lineHeight: "0.9em",
          }}
          className=" text-[8vw] laptop:text-[10vw]  text-center uppercase tracking-tighter font-headingSemiBold mobile:text-[13vw]"
        >
          s<span className="">e</span>le
          <span className=""></span>c<span className="">t</span>ed w
          <span className="">or</span>ks
        </h1>
        <p className="w-[35%] mt-[4em] laptop:mt-[3em] overflow-hidden font-heading text-lg  laptop:text-2xl laptop:leading-[1.2em]  tablet:text-3xl  mobile:text-base  laptop:w-[60%] tablet:w-[100%] mobile:w-[100%] ">
          {`A showcase of our finest creations—where design meets innovation. Explore our projects and see how we transform ideas into immersive digital experiences.`
            .split(" ")
            .map((item, index) => (
              <span
                key={index * 0.08}
                className="projects--text inline-block pr-1"
              >
                {item}
              </span>
            ))}
        </p>
        <h1
          style={{
            lineHeight: "0.9em",
          }}
          className="  text-text/60 tablet:hidden  text-right uppercase text-sm tracking-tighter font-heading "
        >
          // Check work gallery below
        </h1>
      </div>
    </section>
  );
};

export default ProjectsSection;
