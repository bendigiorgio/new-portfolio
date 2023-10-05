"use client";
import React from "react";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { useNavBarStore } from "@/stores/navBarStore";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import useScrollDirection from "@/utils/useScrollDirection";

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  overrideHide?: boolean;
}

const Nav = ({ className, overrideHide = false }: NavProps) => {
  const scrollDirection = useScrollDirection();
  const navBarStore = useNavBarStore();
  return (
    <AnimatePresence>
      {!overrideHide ? (
        scrollDirection === "up" &&
        navBarStore.isNavBarOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link
              href="/#landing"
              className="sm:flex hidden w-fit flex-row items-center text-white hover:cursor-pointer fixed top-6 left-6 z-50"
            >
              <Logo className="h-12 w-12 text-white" />

              <h3 className="ml-2 hidden text-lg font-semibold md:block">
                BEN DI GIORGIO
              </h3>
            </Link>
            <motion.div
              animate={{
                x: navBarStore.position.x,
                y: navBarStore.position.y,
              }}
              className={cn(
                "grid grid-cols-2 grid-rows-4 gap-y-6 w-[376px] h-[85px] gap-x-28 z-50 absolute",
                className
              )}
            >
              <Link
                className="col-start-1 row-start-1 text-right"
                href="#design"
              >
                DESIGN
              </Link>
              <Link
                className="col-start-2 row-start-1"
                href="mailto:bendigiorgio@gmail.com"
              >
                bendigiorgio@gmail.com
              </Link>
              <Link
                className="col-start-1 row-start-2 text-right"
                href="#development"
              >
                DEVELOPMENT
              </Link>
              <Link
                className="col-start-2 row-start-2 whitespace-nowrap"
                href="tel:+818094347288"
              >
                +81 80 9434 7288
              </Link>
              <Link
                className="col-start-1 row-start-3 text-right"
                href="#projects"
              >
                PROJECTS
              </Link>
              <Link className="col-start-1 row-start-4 text-right" href="#bio">
                BIO
              </Link>
              <Link
                className="sm:hidden block col-start-2 row-start-3"
                href="/#landing"
              >
                <Logo className="h-12 w-12 text-white" />
              </Link>
            </motion.div>
          </motion.nav>
        )
      ) : (
        <motion.nav
          animate={{ x: navBarStore.position.x, y: navBarStore.position.y }}
          className={cn(
            "grid grid-cols-2 grid-rows-4 gap-y-6 w-[376px] h-[85px] gap-x-28 z-50 absolute",
            className
          )}
        >
          <Link className="col-start-1 row-start-1 text-right" href="#design">
            DESIGN
          </Link>
          <Link className="col-start-2 row-start-1" href="">
            bendigiorgio@gmail.com
          </Link>
          <Link
            className="col-start-1 row-start-2 text-right"
            href="#development"
          >
            DEVELOPMENT
          </Link>
          <Link className="col-start-2 row-start-2 whitespace-nowrap" href="">
            +81 80 9434 7288
          </Link>
          <Link className="col-start-1 row-start-3 text-right" href="#projects">
            PROJECTS
          </Link>
          <Link className="col-start-1 row-start-4 text-right" href="#bio">
            BIO
          </Link>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Nav;
