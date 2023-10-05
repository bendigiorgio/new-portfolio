"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import image1 from "../../public/loader-1.png";
import image2 from "../../public/loader-2.png";
import image3 from "../../public/loader-3.png";
import { useNavBarStore } from "@/stores/navBarStore";
import Landing from "./Landing";
import Design from "./Design";
import Development from "./Development";
import Projects from "./Projects";
import Bio from "./Bio";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [uLfont, setULFont] = useState<
    "var(--inter-font)" | "var(--kenjoI-font)" | "var(--krylon-font)"
  >("var(--inter-font)");
  const navBarStore = useNavBarStore();

  const [mFont, setMFont] = useState<
    "var(--omegaSans-font)" | "var(--inter-font)"
  >("var(--inter-font)");

  const [mFontWeight, setMFontWeight] = useState<600 | 700>(600);
  const [uLFontWeight, setULFontWeight] = useState<400 | 600>(600);

  const [image, setImage] = useState<StaticImageData>(image1);

  const states: {
    image: StaticImageData;
    uLfont: "var(--inter-font)" | "var(--kenjoI-font)" | "var(--krylon-font)";
    mFont: "var(--omegaSans-font)" | "var(--inter-font)";
    mFontWeight: 600 | 700;
    uLFontWeight: 400 | 600;
  }[] = [
    {
      image: image2,
      uLfont: "var(--kenjoI-font)",
      mFont: "var(--omegaSans-font)",
      mFontWeight: 700,
      uLFontWeight: 400,
    },
    {
      image: image3,
      uLfont: "var(--krylon-font)",
      mFont: "var(--inter-font)",
      mFontWeight: 600,
      uLFontWeight: 400,
    },
    {
      image: image1,
      uLfont: "var(--inter-font)",
      mFont: "var(--inter-font)",
      mFontWeight: 600,
      uLFontWeight: 600,
    },
  ];

  const animationHelper = (delay: number, cycles: number) => {
    let timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < cycles; i++) {
      states.forEach((state, index) => {
        let timeout = setTimeout(() => {
          setImage(state.image);
          setULFont(state.uLfont);
          setMFont(state.mFont);
          setMFontWeight(state.mFontWeight);
          setULFontWeight(state.uLFontWeight);
        }, delay * (3 * i + index + 1));

        timeouts.push(timeout);
      });
    }

    return timeouts;
  };

  useEffect(() => {
    navBarStore.toggleNavBar(false);
    // set timer to show the loader for 2 seconds
    const hideLoaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1530);

    const animationTimeouts = animationHelper(170, 3);

    return () => {
      //clear timeout
      clearTimeout(hideLoaderTimeout);
      animationTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <>
      {showLoader ? (
        <section className="h-screen w-full overflow-hidden max-w-full z-50 flex flex-col justify-between p-8 fixed top-0 left-0">
          <Image
            className="object-cover z-40"
            src={image}
            fill
            alt="background"
          />
          <div
            style={{
              fontFamily: uLfont,
              fontWeight: uLFontWeight,
            }}
            className={`w-full flex flex-row uppercase text-9xl font-semibold z-50 justify-end text-background`}
          >
            Developer
          </div>
          <div
            style={{
              fontFamily: mFont,
              fontWeight: mFontWeight,
            }}
            className={`w-full flex flex-row uppercase text-9xl font-semibold z-50 justify-center font-omegaSans`}
          >
            Ben Di Giorgio
          </div>
          <div
            style={{
              fontFamily: uLfont,
              fontWeight: uLFontWeight,
            }}
            className={`w-full flex flex-row uppercase text-9xl font-semibold z-50 justify-start `}
          >
            Designer
          </div>
        </section>
      ) : (
        <>
          <Landing />
          <Design />
          <Development />
          <Projects />
          <Bio />
        </>
      )}
    </>
  );
};

export default Loader;
