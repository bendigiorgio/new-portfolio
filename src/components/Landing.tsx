"use client";

import { useCurrentVariantStore } from "@/stores/mouseHoverStore";
import CircleSvg from "./CircleSvg";
import { motion } from "framer-motion";
import { useNavBarStore } from "@/stores/navBarStore";
import { useEffect, useRef } from "react";
import Nav from "./Nav";

const LandingMouse = () => {
  return (
    <motion.svg
      initial={{ scale: 1 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      viewBox="0 0 100 100"
      width="auto"
      height="auto"
    >
      <defs>
        <path
          id="circle"
          d="
M 50, 50
m -37, 0
a 37,37 0 1,1 74,0
a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text>
        <textPath href="#circle">
          SCROLL DOWN.SCROLL DOWN..............
        </textPath>
      </text>
    </motion.svg>
  );
};

const Landing = () => {
  const landingRef = useRef<HTMLElement>(null);
  const setHoveredContent = useCurrentVariantStore(
    (state) => state.setHoveredContent
  );
  const setVariant = useCurrentVariantStore((state) => state.setVariant);
  const setStyling = useCurrentVariantStore((state) => state.setStyling);

  const navBarStore = useNavBarStore();

  return (
    <motion.section
      id="landing"
      ref={landingRef}
      className="min-h-[973px] h-screen px-14 pt-4 max-w-full overflow-hidden w-screen relative"
      onMouseEnter={() => {
        setHoveredContent(<LandingMouse />);
        setVariant("scrollDown");
        setStyling(
          "text-xs tracking-wider text-ellipsis lg:text-sm whitespace-nowrap"
        );
      }}
      onMouseLeave={() => {
        setHoveredContent("");
        setVariant("default");
        setStyling("");
      }}
    >
      <CircleSvg className="z-10 absolute top-4 left-12" />
      <div className="z-50 uppercase absolute left-2 sm:left-6 md:left-48 lg:left-60 xl:top-[23rem] top-[26rem] w-fit filter dark:mix-blend-difference">
        <Nav
          overrideHide
          className="absolute md:grid hidden -top-14 -left-40 z-50 "
        />
        <motion.h1
          onViewportEnter={() => {
            navBarStore.toggleNavBar(false);
          }}
          onViewportLeave={() => {
            navBarStore.toggleNavBar(true);
          }}
          className="xl:text-9xl lg:text-8xl sm:text-7xl text-6xl font-semibold whitespace-nowrap"
        >
          Ben Di Giorgio
        </motion.h1>
        <span className="text-3xl text-accent-pink font-krylon">DESIGNER</span>
        <span className="text-3xl text-accent-green font-krylon absolute -top-10 right-0">
          DEVELOPER
        </span>
      </div>
    </motion.section>
  );
};

export default Landing;
