import gsap from "gsap";
import React from "react";

const AnimatedButton = ({ text }) => {
  // BUTTON ANIMATION
  const handleButton_1__Enter = (id) => {
    gsap.killTweensOf(`.wave__${id}`);
    gsap.to(`.wave__${id}`, {
      y: "-100%",
      duration: 0.6,
      stagger: 0.009,
      // ease: "back.out(1.7)",
      ease: "circ.inOut",
    });
  };
  const handleButton_1__Leave = (id) => {
    gsap.killTweensOf(`.wave__${id}`);
    gsap.to(`.wave__${id}`, {
      y: 0,
      duration: 0.6,
      stagger: -0.009,
      ease: "circ.inOut",
    });
  };
  return (
    <div className="BUTTON__CONTAINER w-[9vw]  h-[60px] laptop:h-[80px] laptop:w-[150px]  mobile:w-[130px] mobile:h-[45px]  relative flex items-center justify-center ">
      <div className="SVG__Container  w-full z-20 h-full absolute top-0  ">
        <svg
          viewBox="0 0 156 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full  mix-blend-darken   z-10 opacity-90 "
        >
          {/* Main Button Path */}
          <path
            d="M155 47V15.8247C155 15.2965 154.791 14.7897 154.419 14.415L141.675 1.59025C141.299 1.21245 140.789 1 140.256 1H3C1.89543 1 1 1.89543 1 3V34.1753C1 34.7035 1.20899 35.2103 1.58133 35.585L14.3254 48.4097C14.7008 48.7876 15.2115 49 15.7441 49H153C154.105 49 155 48.1046 155 47Z"
            fill="#F50A1C" // Button Color
          />
        </svg>
      </div>

      <div
        onMouseEnter={() => handleButton_1__Enter(1)}
        onMouseLeave={() => handleButton_1__Leave(1)}
        style={{ perspective: 1000 }}
        className="button button--1 absolute z-50  overflow-hidden flex flex-col items-center justify-center   cursor-pointer h-full  text-white w-full
      "
      >
        <div className="button__text--1    overflow-hidden h-[40%] mobile:h-[35%]  uppercase text-[.9vw] laptop:text-lg mobile:text-xs   w-full ">
          <h1 className="font-heading text-center   ">
            {text.split("").map((letter, index) => (
              <span className="wave__1 inline-block" key={index}>
                {letter}
              </span>
            ))}{" "}
          </h1>
          <h1 className="font-heading text-center  ">
            {text.split("").map((letter, index) => (
              <span className="wave__1 inline-block" key={index}>
                {letter}
              </span>
            ))}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton;
