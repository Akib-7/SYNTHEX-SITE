import React from "react";

const AnimatedGradient = ({ opacity }) => {
  return (
    <div
      className={`Animated__Gradient ${opacity} z-10 absolute top-0 pointer-events-none w-full h-full`}
    ></div>
  );
};

export default AnimatedGradient;
