"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "maison-components-core/button";
import { Card } from "maison-components-core/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useCurrentVariantStore } from "@/stores/mouseHoverStore";
const ProjectMouse = () => {
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
          id="projectCircle"
          d="
  M 50, 50
  m -37, 0
  a 37,37 0 1,1 74,0
  a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text>
        <textPath href="#projectCircle">
          SEE MORE.........SEE MORE.....................
        </textPath>
      </text>
    </motion.svg>
  );
};

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  features?: {
    title: string;
    description: string;
  }[];
}

const bigCards: CardProps[] = [
  {
    title: "Kiso UI",
    description:
      "Comprehensive UI/Utility Library built for React with Tailwind CSS.",
    link: "https://kiso-ui.vercel.app/",
    image: "/maison-components.png",
    features: [
      {
        title: "Reusable",
        description:
          "Built to be usable in any project. Can be extended with libraries such as framer-motion.",
      },
      {
        title: "Cusotmizable",
        description:
          "Easily customizable with Tailwind CSS with variants included.",
      },
      {
        title: "Utilities",
        description:
          "A utilities sub-package with useful hooks and functions to speed up development.",
      },
    ],
  },
  {
    title: "Shukkin",
    description:
      "A simple, no fluff shift management application for small businesses.",
    link: "https://www.shukkin.com/",
    image: "/shukkin.png",
    features: [
      {
        title: "Built with Experience",
        description:
          "Based on experience working in managerial positions and as an employee.",
      },
      {
        title: "Ease of Use",
        description:
          "Easy to use for both employees and managers. No fluff, just the essentials.",
      },
      {
        title: "Low Setup",
        description: "You can get set up and going in under a minute.",
      },
    ],
  },
];

const smallCards: CardProps[] = [
  {
    title: "Maison Di Giorgio",
    description: "Design Agency",
    link: "https://www.maisondigiorgio.com/",
  },
  {
    title: "Palette Comparison",
    description: "API, Rust",
    link: "https://github.com/bendigiorgio/ts-median-cut-rust-comparison",
  },
  {
    title: "Image Enhancer",
    description: "Python, AI, GAN",
    link: "",
  },
  {
    title: "Blackbox Tattoo",
    description: "Tattoo Artist, E-commerce",
    link: "",
  },
];

const BigCard = ({ title, description, features, image, link }: CardProps) => {
  const setHoveredContent = useCurrentVariantStore(
    (state) => state.setHoveredContent
  );
  const setVariant = useCurrentVariantStore((state) => state.setVariant);
  const setStyling = useCurrentVariantStore((state) => state.setStyling);

  return (
    <Link href={link} className="max-w-[492px]">
      <Card
        onMouseEnter={() => {
          setHoveredContent(<ProjectMouse />);
          setVariant("project");
          setStyling(
            "text-xs tracking-wider text-ellipsis lg:text-sm whitespace-nowrap"
          );
        }}
        onMouseLeave={() => {
          setHoveredContent("");
          setVariant("default");
          setStyling("");
        }}
        className="flex flex-row p-4 space-x-4 w-full"
      >
        <div className="flex-shrink-0">
          {image && (
            <Image
              width={208}
              height={400}
              src={image}
              alt=""
              className="rounded-md shadow-lg w-52 h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xl font-semibold">{title}</span>
            <p className="text-muted-foreground text-sm">{description}</p>
            <dl className="flex flex-col space-y-2 max-w-[190px] mt-4">
              {features &&
                features.map((feature, index) => (
                  <div key={index}>
                    <dt className="font-medium">{feature.title}</dt>
                    <dd className="text-xs text-muted-foreground">
                      {feature.description}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const SmallCard = ({ title, description, image, link }: CardProps) => {
  const setHoveredContent = useCurrentVariantStore(
    (state) => state.setHoveredContent
  );
  const setVariant = useCurrentVariantStore((state) => state.setVariant);
  const setStyling = useCurrentVariantStore((state) => state.setStyling);
  return (
    <Link className="max-w-[492px] w-full" href={link}>
      <Card
        onMouseEnter={() => {
          setHoveredContent(<ProjectMouse />);
          setVariant("project");
          setStyling(
            "text-xs tracking-wider text-ellipsis lg:text-sm whitespace-nowrap"
          );
        }}
        onMouseLeave={() => {
          setHoveredContent("");
          setVariant("default");
          setStyling("");
        }}
        className="flex flex-row p-4 space-x-4 w-full"
      >
        <div className="bg-gradient-to-b from-rose-500/60 via-fuchsia-800/60 to-indigo-700/60 rounded-md relative w-52">
          {image && <Image fill className="object-cover" src={image} alt="" />}
          <div className="p-3 flex flex-col">
            <div className="rounded-full h-5 w-5 bg-foreground" />
            <span className="text-lg font-medium">{title}</span>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="flex flex-col grow justify-between">
          <div>
            <span className="text-sm font-medium">{title}</span>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="px-4  w-full pb-60 pt-24">
      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-row justify-between w-full items-baseline relative">
          <h2 className="text-6xl md:text-8xl uppercase font-semibold">
            PROJECTS
          </h2>
          <Link
            href="https://github.com/bendigiorgio"
            className="font-krylon text-accent-green text-lg sm:text-xl text-right flex flex-row items-center space-x-2 sm:relative absolute -top-8 sm:top-0"
          >
            <span>My other projects</span>
            <ExternalLink />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-8 gap-x-10 justify-items-center mt-6">
          {bigCards.map((card, index) => (
            <BigCard key={index} {...card} />
          ))}
          {smallCards.map((card, index) => (
            <SmallCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
