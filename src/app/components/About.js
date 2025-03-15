"use client";
import React, { useRef } from "react";
import GradientImage from "./GradientImage";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const aboutSection = useRef(null);
  useGSAP(() => {
    gsap.from(".about--text", {
      opacity: 0,

      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: aboutSection.current,
        start: "top 50%",
        end: "+=500",
        scrub: true,
      },
    });
  }, []);
  return (
    <section ref={aboutSection} className="w-full bg-bg mb-[5em] ">
      <div className=" w-[90%]  mx-auto flex tablet:flex-wrap  justify-center ">
        <div className="tablet:order-2  tablet:mt-[10%] mt-[15%] ">
          <GradientImage
            alt={"a picture of futuristic robot holding a purse"}
            name={"robot2.png"}
            aspectWidth={2000}
            aspectHeight={1556}
            objectFit="object-contain object-center"
            imageSizes="w-[500px] h-[500px]    mobile:w-[350px] mobile:h-[350px]   "
            flip={1}
            saturate={0}
          />
        </div>
        <div className="  w-[60%] tablet:w-[85%] mobile:w-[90%]  mt-[10em] mobile:mt-[5em] flex flex-col items-end    ">
          <div className=" tablet:pl-0 pl-[50%] laptop:pl-[20%]  flex flex-col space-y-[3%] tablet:space-y-[6%]">
            <h1 className="uppercase flex items-center  text-[5vw] tablet:text-[12vw] mobile:text-[10vw] font-headingSemiBold tracking-tight">
              a<span className="">b</span>
              <span className="">ou</span>t
              <span className=" inline-block animate-blink  bg-accent/90 ml-[.5em] w-[12px] h-[12px] mobile:h-[8px] mobile:w-[8px]"></span>
            </h1>
            <p className=" overflow-hidden font-heading text-lg  laptop:text-2xl laptop:leading-[1.2em]  tablet:text-3xl  mobile:text-base mobile:w-[100%] ">
              {`Synthex is a creative studio pushing the boundaries of 3D art, digital fashion, and immersive experiences.`
                .split(" ")
                .map((item, index) => (
                  <span
                    key={index * 0.01}
                    className="about--text inline-block pr-1"
                  >
                    {item}
                  </span>
                ))}
            </p>
            <p className="overflow-hidden font-heading text-lg  laptop:text-2xl laptop:leading-[1.2em] tablet:text-3xl mobile:text-base mobile:w-[100%] ">
              {`Our work spans across metaverse environments, NFT art, and cutting-edge CGI— bridging the gap between reality and the digital frontier.`
                .split(" ")
                .map((item, index) => (
                  <span
                    key={index * 0.02}
                    className="about--text inline-block pr-1"
                  >
                    {item}
                  </span>
                ))}
            </p>

            <h2 className="cursor-pointer pt-[5em] tablet:pt-[2em] relative flex flex-col w-fit group font-heading  uppercase text-xs tablet:text-xl mobile:text-xs">
              <a
                className=" bg-[#C7C7C7] relative  py-[1em] px-[2em]  transition-colors ease-in-out duration-700 border-text"
                href=""
              >
                learn more about us{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 35 35"
                  className="absolute -bottom-1 left-0 w-[10%] rotate-[90deg]"
                >
                  <path
                    d="M4.27968 35C5.91851 35 7.48943 34.3367 8.6431 33.1575L33.2199 8.03762C34.3605 6.87207 35 5.29743 35 3.65645L35 -1.69568e-07L35 35L0 35L4.27968 35Z"
                    fill="#dddd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 35 35"
                  className="absolute -top-1 right-0 w-[10%] rotate-[-90deg]"
                >
                  <path
                    d="M4.27968 35C5.91851 35 7.48943 34.3367 8.6431 33.1575L33.2199 8.03762C34.3605 6.87207 35 5.29743 35 3.65645L35 -1.69568e-07L35 35L0 35L4.27968 35Z"
                    fill="#dddd"
                  ></path>
                </svg>
                <span className="font-pixel text-accent/90 ml-[1.2em]">
                  {">>>"}
                </span>
                <div className="w-0 mobile:group-hover:w-0 transition-all ease-in-out duration-300 group-hover:w-full border-t-2 border-dashed border-text"></div>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
