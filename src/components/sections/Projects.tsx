"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

const slideVariants = {
  enter: (direction: number) => ({
    clipPath:
      direction > 0
        ? "inset(100% 0 0 0)" // reveal from bottom
        : "inset(0 0 100% 0)", // reveal from top
    scale: 1.05,
    opacity: 1,
  }),
  center: {
    clipPath: "inset(0 0 0 0)",
    scale: 1,
    opacity: 1,
  },
  exit: (direction: number) => ({
    clipPath: direction > 0 ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)",
    scale: 0.95,
    opacity: 0.8,
  }),
};

function useUISounds() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isMobile =
    typeof window !== "undefined" &&
    /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const enabled = !prefersReducedMotion && !isMobile;

  const play = (src: string, volume = 0.15) => {
    if (!enabled) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
  };

  return {
    tick: () => play("/sounds/tick.mp3", 0.12),
    swoosh: () => play("/sounds/swoosh.mp3", 0.18),
    enabled,
  };
}

export function FeaturedProjectsFX() {
  const sounds = useUISounds();
  const total = projects.length;
  const [[active, direction], setActive] = useState<[number, number]>([0, 0]);

  function goTo(index: number) {
    if (index === active) return;
    sounds.swoosh();
    setActive([index, index > active ? 1 : -1]);
  }

  function paginate(dir: number) {
    sounds.swoosh();
    setActive(([prev]) => [(prev + dir + total) % total, dir]);
  }

  return (
    <section className="flex flex-col gap-2 pt-20 bg-secondary/20">
      <div className="px-4">
        <h2 className="text-sm font-medium tracking-[0.5em] uppercase text-muted-foreground mb-4">
          Selected Works
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          Curated  Projects
        </h3>
      </div>
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* FULL-BLEED IMAGE */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={projects[active].title}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y < -80) paginate(1);
              if (info.offset.y > 80) paginate(-1);
            }}
          >
            <Image
              src={projects[active].image}
              alt={projects[active].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* DESKTOP OVERLAY */}
        <div className="relative z-10 hidden md:grid mx-auto max-w-7xl h-full grid-cols-[1fr_auto_1fr] items-center gap-12 px-6">
          {/* LEFT — Project titles */}
          <div className="space-y-3 text-sm uppercase tracking-widest text-white">
            {projects.map((project, index) => {
              const isActive = index === active;

              return (
                <button
                  key={project.title}
                  onClick={() => goTo(index)}
                  onMouseEnter={() => sounds.tick()}
                  className={`group relative flex items-center gap-3 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "opacity-100 font-semibold translate-x-3"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {/* Active dot (left side) */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white transition-opacity" />
                  )}
                  {/* Text */}
                  <span>{project.title}</span>
                </button>
              );
            })}
          </div>

          {/* CENTER — Year */}
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[active].year}
              initial={{ y: direction > 0 ? 20 : -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction > 0 ? -20 : 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-4xl md:text-6xl font-bold text-white/80"
            >
              {projects[active].year}
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — Project roles */}
          {/* RIGHT — Project roles (clickable) */}
          {/* RIGHT — Project roles */}
          <div className="space-y-3 text-sm uppercase tracking-widest text-white flex flex-col text-right">
            {projects.map((project, index) => {
              const isActive = index === active;

              return (
                <button
                  key={project.role + index}
                  onClick={() => goTo(index)}
                  onMouseEnter={() => sounds.tick()}
                  className={`group relative flex items-center justify-end gap-3 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "opacity-100 font-semibold -translate-x-3"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {/* Text */}
                  <span>{project.role}</span>

                  {/* Active dot (right side) */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white transition-opacity" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE CARD OVERLAY */}
        <div className="absolute bottom-6 left-0 right-0 z-10 px-4 md:hidden">
          <div className="flex justify-between items-end text-white">
            <div>
              <div className="text-lg font-bold uppercase">
                {projects[active].title}
              </div>
            </div>
            <div className="text-right text-sm uppercase opacity-80">
              <div>{projects[active].role}</div>
              <div>{projects[active].year}</div>
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => {
                sounds.swoosh();
                paginate(-1);
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => {
                sounds.swoosh();
                paginate(1);
              }}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-4 text-sm text-white tabular-nums">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <span className="w-24 h-px bg-white/40" />
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
