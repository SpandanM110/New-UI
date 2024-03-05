import React from "react";
import { cn } from "../../../../utils/cn";
// import { cn } from "@/utils/cn";


type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] w-full h-full opacity-0", // Adjusted classes
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100" // Adjusted viewBox
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="50"
          cy="50"
          rx="50"
          ry="50"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
