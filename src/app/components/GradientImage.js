import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";

const GradientImage = ({
  name,

  alt,
  aspectWidth,
  aspectHeight,
  saturate,
  color,
  imageSizes,
  objectFit,
}) => {
  return (
    <div className="GRADIENT-IMAGE overflow-hidden relative  flex  items-center justify-center">
      <span
        className={`w-[10%] h-[10%] z-40 ${
          color ? color : "bg-bg"
        } bottom-0 left-0 absolute rotate-45`}
      ></span>
      <span
        className={`w-[10%] h-[10%] z-40 ${
          color ? color : "bg-bg"
        } top-0 right-0 absolute rotate-45`}
      ></span>
      <span
        className={`w-[10%] h-[10%] z-40 ${
          color ? color : "bg-bg"
        } bottom-0 right-0 absolute rotate-45`}
      ></span>
      <span
        className={`w-[10%] h-[60%] z-40 ${
          color ? color : "bg-bg"
        } left-[0%] rounded-sm top-[15%] absolute`}
      ></span>

      <div
        className={`IMAGE___Container ${imageSizes}   m-[6%]   bg-accent/95 rounded-md overflow-hidden relative`}
      >
        <Image
          src={`/Picture/${name}`}
          width={aspectWidth}
          height={aspectHeight}
          alt={alt}
          priority={false}
          style={{ filter: `saturate(${saturate})` }}
          className={` w-full h-full ${objectFit} absolute bottom-0 z-10 `}
        />
        <AnimatedGradient opacity={"opacity-50"} />
      </div>
    </div>
  );
};

export default GradientImage;
