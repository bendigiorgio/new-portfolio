"use client";
import { useSpinnerStore } from "@/stores/spinnerStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCurrentVariantStore } from "@/stores/mouseHoverStore";
import Link from "next/link";

const BioMouse = () => {
  return (
    <motion.svg
      className="relative"
      initial={{ scale: 1 }}
      viewBox="0 0 100 100"
      width="auto"
      height="auto"
    >
      <defs>
        <path
          id="bioCircle"
          d="
  M 50, 50
  m -37, 0
  a 37,37 0 1,1 74,0
  a 37,37 0 1,1 -74,0"
        />
      </defs>
      <motion.text
        style={{ originX: "50px", originY: "50px" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <textPath href="#bioCircle">
          LinkedIn.........LinkedIn.....................
        </textPath>
      </motion.text>
      <svg
        x="30"
        y="30"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="hsl(var(--background))"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
      </svg>
    </motion.svg>
  );
};

const Bio = () => {
  const setHoveredContent = useCurrentVariantStore(
    (state) => state.setHoveredContent
  );
  const setVariant = useCurrentVariantStore((state) => state.setVariant);
  const setStyling = useCurrentVariantStore((state) => state.setStyling);
  const spinnerStore = useSpinnerStore();
  return (
    <section id="bio" className="pb-60 px-14">
      <motion.h4
        onViewportEnter={(e) => {
          spinnerStore.setColor("#D57BFF");
        }}
        onViewportLeave={(e) => {
          spinnerStore.setColor("#BAFA31");
        }}
        className="font-krylon text-accent-pink text-lg sm:text-xl"
      >
        A bit about me
      </motion.h4>
      <div className="flex flex-row space-x-24">
        <div className="flex flex-col sm:text-lg">
          <div className="space-y-2">
            <h2 className="text-8xl uppercase font-semibold">BIO</h2>
          </div>
          <div className="space-y-8 max-w-2xl mt-8 ">
            <p className="">
              Born in Scotland and nurtured amidst the diverse cultures of
              America and Australia, my life has been a global odyssey. Each
              stop on my journey - from the my childhood in the U.S. to studies
              in the history rich Paris - has endowed me with a rich palette of
              experiences. In 2019, I made Japan my home and have been living in
              Fukuoka ever since.
            </p>
            <p className="text-muted-foreground">
              I&apos;m deeply passionate about tennis, drawing strategies and
              patience from the court into my work. Fashion, too, plays a
              significant role in my life, influencing not just my wardrobe but
              also my designs, with brands like Kidill and Yohji Yamamoto
              serving as muses. And in quiet moments, music becomes my
              sanctuary, with artists like JPEGMAFIA and Fred Again setting the
              rhythm of my day.
            </p>
            <p className="text-muted-foreground">
              From Melbourne&apos;s eclectic suburbs to Fukuoka&apos;s luscious
              countryside, my journey has been an eclectic blend of cultures,
              languages, coding and more.
            </p>
            <p className="text-lg md:text-xl font-medium">
              Ready for a new digital adventure? Let&apos;s craft it together.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setHoveredContent(<BioMouse />);
            setVariant("bio");
            setStyling(
              "text-xs tracking-wider text-ellipsis lg:text-sm whitespace-nowrap"
            );
          }}
          onMouseLeave={() => {
            setHoveredContent("");
            setVariant("default");
            setStyling("");
          }}
          className="lg:block hidden"
        >
          <Link href="https://www.linkedin.com/in/bendigiorgio/">
            <Image
              className="rounded-md h-full object-cover"
              width={340}
              height={570}
              src="/bio-image.jpeg"
              alt="Ben Di Giorgio"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bio;
