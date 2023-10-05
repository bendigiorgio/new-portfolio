"use client";

import { useSpinnerStore } from "@/stores/spinnerStore";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
interface DesignCardProps {
  title: string;
  description: string;
  image: string;
}

const DesignCard = ({ title, description, image }: DesignCardProps) => {
  return (
    <div className="flex flex-col w-72 space-y-3">
      <Image
        className="rounded-md shadow-lg"
        alt=""
        src={image}
        width={282}
        height={282}
      />
      <span>{title}</span>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const designCards: DesignCardProps[] = [
  {
    title: "Design Philosophy",
    description:
      "At the crossroads of aesthetics and functionality, every project is a testament to a meticulous fusion of art and purpose.",
    image: "/designCard.png",
  },
  {
    title: "Inspirations & Influences",
    description:
      "Blending Japanese artistry with Australian modernism, every design showcases a global tapestry, echoing Fukuoka's vibrancy and Melbourne's innovation.",
    image: "/designCard.png",
  },
  {
    title: "Tools of the Trade",
    description:
      "Harnessing the prowess of modern design tools and frameworks, I ensure every digital canvas is as responsive as it is visually enthralling.",
    image: "/designCard.png",
  },
  {
    title: "Adaptable Design Approach",
    description:
      "With every brand's unique essence in mind, I curate adaptable designs, from urban edginess to soft elegance, employing mood boards and iterative collaboration.",
    image: "/designCard.png",
  },
];

const Design = () => {
  const designRef = useRef<HTMLElement>(null);
  const spinnerStore = useSpinnerStore();

  return (
    <motion.section
      id="design"
      ref={designRef}
      className="w-screen max-w-full overflow-hidden flex flex-col px-14 pb-36 pt-24"
    >
      <div className="space-y-2">
        <motion.h4
          onViewportEnter={(e) => {
            spinnerStore.setColor("#D57BFF");
          }}
          onViewportLeave={(e) => {
            spinnerStore.setColor("#BAFA31");
          }}
          className="font-krylon text-accent-pink text-lg sm:text-xl"
        >
          Crafting Digital Elegance from Vision to Interface
        </motion.h4>
        <h2 className="text-8xl uppercase font-semibold">DESIGN</h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-lg">
          I excel in frontend development using React. I leverage the power of
          React to build responsive, interactive, and user-friendly interfaces.
        </p>
      </div>
      <div className="grid lg:mx-0 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-full gap-8 mt-14">
        {designCards.map((card, index) => (
          <DesignCard key={index} {...card} />
        ))}
      </div>
    </motion.section>
  );
};

export default Design;
