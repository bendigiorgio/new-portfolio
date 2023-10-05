"use client";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCurrentVariantStore } from "@/stores/mouseHoverStore";
import useMouse from "@react-hook/mouse-position";

interface sizeParams {
  minInPx: number;
  maxInVw: number;
}

const Mouse = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [setMouse, mouse] = useState<MousePosition | null>(null);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  }, []);

  const sizeBasedOnWidth = ({ minInPx, maxInVw }: sizeParams) => {
    const width = document?.body.offsetWidth;
    const size = Math.max(minInPx, width * (maxInVw / 100));
    const percentage = size / width;
    return percentage;
  };

  const mouse = useMouse(document?.body, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: number = 0;
  let mouseYPosition: number = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX!;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY!;
  }
  const currentVariant = useCurrentVariantStore(
    (state) => state.hoveredVariant
  );

  const currentStyling = useCurrentVariantStore((state) => state.styling);
  const currentContent = useCurrentVariantStore(
    (state) => state.hoveredContent
  );

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const variants = {
    default: {
      height: "2vw",
      width: "2vw",
      x: mouseXPosition - document?.body.offsetWidth * 0.01,
      y: mouseYPosition - document?.body.offsetWidth * 0.01,

      transition: {
        delay: 0,
        type: "spring",
        mass: 0.6,
      },
    },
    scrollDown: {
      backgroundColor: "#BAFA31",
      height: sizeBasedOnWidth({ minInPx: 100, maxInVw: 10 }) * 100 + "vw",
      width: sizeBasedOnWidth({ minInPx: 100, maxInVw: 10 }) * 100 + "vw",
      x:
        mouseXPosition -
        (document?.body.offsetWidth *
          sizeBasedOnWidth({ minInPx: 100, maxInVw: 10 })) /
          2,
      y:
        mouseYPosition -
        (document?.body.offsetWidth *
          sizeBasedOnWidth({ minInPx: 100, maxInVw: 10 })) /
          2,
    },
    project: {
      backgroundColor: "#BAFA31",
      height: sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 }) * 100 + "vw",
      width: sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 }) * 100 + "vw",
      x:
        mouseXPosition -
        (document?.body.offsetWidth *
          sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 })) /
          2,
      y:
        mouseYPosition -
        (document?.body.offsetWidth *
          sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 })) /
          2,
    },
    bio: {
      height: sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 }) * 100 + "vw",
      width: sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 }) * 100 + "vw",
      x:
        mouseXPosition -
        (document?.body.offsetWidth *
          sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 })) /
          2,
      y:
        mouseYPosition -
        (document?.body.offsetWidth *
          sizeBasedOnWidth({ minInPx: 100, maxInVw: 7 })) /
          2,
    },
  };
  return (
    <Suspense>
      {isMobile ? null : (
        <motion.div
          className="rounded-full bg-accent-pink fixed flex justify-center content-center items-center z-20 pointer-events-none"
          variants={variants}
          transition={spring}
          animate={currentVariant}
        >
          <motion.span className={`${currentStyling}`}>
            {currentContent}
          </motion.span>
        </motion.div>
      )}
    </Suspense>
  );
};

export default Mouse;
