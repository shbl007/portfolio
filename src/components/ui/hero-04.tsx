"use client";

import React, { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import myImage from "../../../public/port-img3.jpeg";
import Thrifty from "../../../public/thrifty.png";
import secondNature from "../../../public/second-nature.png";
import gemini from "../../../public/gemini.png";
import { motion } from "framer-motion";

const images = [
  { id: 0, src: Thrifty },
  { id: 1, src: gemini },
  { id: 2, src: secondNature },
];

export function ImageStack() {
  const [stack, setStack] = useState(images);

  const handleClick = (clickedIndex: number) => {
    if (clickedIndex === 0) return;

    setStack((prev) => {
      const newStack = [...prev];
      const clicked = newStack.splice(clickedIndex, 1)[0];
      newStack.unshift(clicked);
      return newStack;
    });
  };

  return (
    <div className="relative w-60 h-36 hidden md:block">
      {stack.map((img, index) => (
        <motion.div
          key={img.id}
          layout
          onClick={() => handleClick(index)}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="absolute w-60 h-36 cursor-pointer rounded-md overflow-hidden border shadow-lg bg-white"
          style={{
            right: index * 24,
            top: index * 24,
            zIndex: 30 - index,
          }}
        >
          <Image
            src={img.src}
            alt="Portfolio"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6 md:mt-10">
        <div className="relative ">
          <p className="text-sm absolute -top-4 left-8 md:left-20 xl:left-16 font-medium tracking-wider">
            2001
          </p>
          
          <h1
            className={`z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[8rem] xl:whitespace-nowrap uppercase`}
          >
            Frontend Developer
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-0 font-thin tracking-[6px] uppercase">
            Shibil Salim
          </p>
          <p className="text-4xl absolute xl:hidden -bottom-12 left-16 font-thin tracking-[6px] uppercase">
            Shibil Salim
          </p>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ Frontend Development</div>
                <div>/ UI Development</div>
                <div>/ UI/UX Design</div>
              </div>
              <div className="absolute hidden  md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                <Image
                  src={myImage}
                  alt="Designer portrait"
                  className="h-100 w-full object-contain grayscale"
                  width={1000}
                  height={1000}
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                  INTERFACE ENGINEERING
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-secondary">
            <Image
              src={myImage}
              alt="Designer portrait"
              className="h-100 w-full object-contain grayscale"
              width={1000}
              height={1000}
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
              BASED IN BOKARO STEEL CITY
            </div>
          </div>
        </div>

        {/* <div className="md:mt-40 mt-10">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
            Frontend developer focused on UI,
            <br />
            usability, and clean implementation.
          </p>
        </div> */}
        {/* <div className="flex justify-center pt-6">
          <Button size={"lg"}>Book a call</Button>
        </div> */}

        <div className="md:flex mt-20 md:mt-40 items-end justify-between">
          <ImageStack />

          <div>
            <div className="flex items-center md:justify-end gap-2">
              <span className="text-lg font-medium tracking-wider uppercase">
                Think different
              </span>
              <ArrowDownRight className="size-6" />
            </div>

            <div className="mt-3 md:text-right">
              <h2 className={`text-5xl uppercase tracking-[-4px]`}>
                Design without Limits
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute block dark:hidden inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}
