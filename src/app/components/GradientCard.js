"use client";
import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";

const GradientCard = ({ CardSizes, title, description, serviceNumber }) => {
  return (
    <div className="GRADIENT-CARD   cursor-pointer overflow-hidden relative  flex  items-center justify-center">
      <span className="w-[10%] h-[10%] z-40 bg-bg bottom-0 left-0 absolute rotate-45"></span>
      <span className="w-[10%] h-[10%] z-40 bg-bg top-0 right-0 absolute rotate-45"></span>
      <span className="w-[10%] h-[10%] z-40 bg-bg bottom-0 right-0 absolute rotate-45"></span>
      <span className="w-[10%] h-[60%] z-40 bg-bg left-[0%] rounded-sm top-[15%] absolute"></span>

      <div
        className={`Card___Container  ${CardSizes}  text-black group/card flex flex-col items-center   m-[6%]  bg-accent/90 rounded-md overflow-hidden relative`}
      >
        {/* <p className="bg-text hidden mobile:text-xs  items-center justify-start  absolute  top-0 text-bg z-50 font-heading w-full rounded-t-sm py-[.3em] mobile:py-[2.4%] px-[2em] ">
          Service # 01
        </p> */}
        {/* <p className="bg-black absolute left-0 bottom-0 text-bg font-heading w-full py-[.3em] px-[.6em] ">
          //01
        </p> */}
        <h2 className="text-[30px] laptop:text-[50px] mobile:text-[30px]  mt-[1em] font-headingBold z-30  uppercase">
          {title}
        </h2>
        <p className="font-heading laptop:text-2xl laptop:leading-[1.2em]  mobile:text-sm w-[70%] mx-auto mobile:w-[70%]   z-30 mt-[1em]">
          {description}
        </p>
        <div className="w-[70%] mobile:w-[70%] z-30 mt-[1.5em] ">
          <h3 className="cursor-pointer laptop:text-2xl laptop:leading-[1.2em] relative flex flex-col w-fit   font-headingSemiBold uppercase text-sm mobile:text-xs">
            <a className="" href="">
              Request service{" "}
              <span className="font-pixel  ml-[1em]">{">>>"}</span>
            </a>

            <div className="w-0 mobile:w-full transition-all ease-in-out duration-300 group-hover/card:w-full border-t-2 border-dashed border-black"></div>
          </h3>
        </div>
        <p className="font-heading tracking-wider text-2xl  mobile:text-xl w-[80%] mt-[.5em] mobile:mt-[1.5em] text-right">
          {serviceNumber}
        </p>

        <AnimatedGradient opacity={"opacity-30"} />
      </div>
    </div>
  );
};

export default GradientCard;
