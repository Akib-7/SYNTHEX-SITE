"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-[95%]  pt-[1em] mx-auto flex justify-between items-center">
      <div className="logo">
        <p className="tracking-wider uppercase font-headingSemiBold text-[1.2vw] mobile:text-[5vw] ">
          synthex
        </p>
      </div>

      <div className="Nav mobile:hidden relative w-[40%] laptop:w-[70%]  bg-[#C7C7C7] py-[.5em]  flex flex-col items-center justify-center">
        <span className="w-[8%] h-[50%] bg-bg absolute -top-[20%] -right-[4%] rotate-45"></span>
        <span className="w-[8%] h-[50%] bg-bg absolute -bottom-[20%] -left-[4%] rotate-45"></span>
        <div className="nav__items flex w-full items-center justify-between px-[5em] pl-[4em] space-x-[1em] ">
          <span className=" w-[5px] h-[5px] animate-blink absolute left-[5%] bg-accent"></span>
          <p className="font-heading text-sm laptop:text-lg">Home</p>
          <p className="font-heading text-sm laptop:text-lg">About</p>
          <p className="font-heading text-sm laptop:text-lg">Services</p>
          <p className="font-heading text-sm laptop:text-lg">Works</p>
          <p className="font-heading text-sm laptop:text-lg">Contact Us</p>
        </div>

        <div className="border-t-2 border-dashed border-black/30 w-full "></div>
      </div>
      <div className="Nav hidden mobile:block relative w-[25%]  bg-[#C7C7C7] py-[.7em]   ">
        <span className="w-[20%] h-[50%] bg-bg absolute -top-[25%] -right-[11%] rotate-45"></span>
        <span className="w-[20%] h-[50%] bg-bg absolute -bottom-[25%] -left-[11%] rotate-45"></span>
        <div className="nav__items flex w-full items-center px-[3em]  ">
          <span className=" w-[5px] h-[5px] animate-blink absolute left-[12%] bg-accent"></span>
          <p className="font-heading text-xs uppercase">Menu</p>
        </div>

        <div className="border-t-2 mt-[.3em] border-dashed border-black/20 w-full "></div>
      </div>
    </div>
  );
};

export default Navbar;
