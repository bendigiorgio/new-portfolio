"use client";
import React from "react";
import { motion } from "framer-motion";
interface CircleSvgProps extends React.SVGProps<SVGSVGElement> {}

const CircleSvg = ({ className }: CircleSvgProps) => {
  const padding = 10;
  const paddedWidth = 1096 + 2 * padding;
  const paddedHeight = 934 + 2 * padding;
  const circleOrigin = { originX: "467px", originY: "467px" };
  const rotationAnimation = (speed: number = 20) => {
    return {
      rotate: 360,
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      },
    };
  };
  return (
    <>
      <svg
        className={className}
        width={paddedWidth}
        height={paddedHeight}
        viewBox={`${-padding} ${-padding} ${paddedWidth} ${paddedHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="467" cy="467" r="466.5" stroke="#27272A" />

        <circle cx="467" cy="467" r="352.5" stroke="#27272A" />
        <circle cx="467" cy="467" r="419.5" stroke="#27272A" />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation()}
          style={circleOrigin}
          cx="824.5"
          cy="167.5"
          r="7.5"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(35)}
          style={circleOrigin}
          cx="171"
          cy="276"
          r="9"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(30)}
          style={circleOrigin}
          cx="246.5"
          cy="191.5"
          r="4.5"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(30)}
          style={circleOrigin}
          cx="817.5"
          cy="502.5"
          r="4.5"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation()}
          style={circleOrigin}
          cx="26.5"
          cy="621.5"
          r="8.5"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          //middle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(26)}
          style={circleOrigin}
          cx="259.5"
          cy="831.5"
          r="8.5"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation()}
          style={circleOrigin}
          cx="324"
          cy="24"
          r="4"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(18)}
          style={circleOrigin}
          cx="833"
          cy="757"
          r="3"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(18)}
          style={circleOrigin}
          cx="827"
          cy="765"
          r="3"
          fill="hsl(var(--foreground))"
        />
        <motion.circle
          initial={{ rotate: 0 }}
          animate={rotationAnimation(18)}
          style={circleOrigin}
          cx="838.5"
          cy="749.5"
          r="1.5"
          fill="hsl(var(--foreground))"
        />
        <circle cx="831.5" cy="425.5" r="84.5" fill="hsl(var(--background))" />
        <circle cx="139" cy="349" r="82" fill="hsl(var(--background))" />
        <circle cx="849" cy="415" r="247" fill="hsl(var(--background))" />
      </svg>
    </>
  );
};

export default CircleSvg;
