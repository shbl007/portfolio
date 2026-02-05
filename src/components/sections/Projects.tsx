"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

const slideVariants = {
  enter: (direction: number) => ({
    clipPath:
      direction > 0 ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)",
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

  const activeProject = projects[active];

  return (
    <section className="flex flex-col gap-6 pt-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl w-full px-6">
        <h2 className="text-sm font-medium tracking-[0.5em] uppercase text-muted-foreground mb-4">
          Selected Works
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          Curated Projects
        </h3>
      </div>

      <div id="projects" className="relative h-[65vh] md:h-[90vh] w-full overflow-hidden bg-black">
        {/* FULL-BLEED IMAGE */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeProject.title}
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
              src={activeProject.image}
              alt={activeProject.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </motion.div>
        </AnimatePresence>

        {/* DESKTOP OVERLAY */}
        <div className="relative z-10 hidden md:grid mx-auto max-w-7xl h-full grid-cols-[1fr_1fr] items-start gap-6 px-6 pt-44">
          {/* LEFT — Project titles box */}
          <div className="p-12 bg-black/35 backdrop-blur-sm rounded-lg">
            <div className="space-y-4 text-white">
              {projects.map((project, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={project.title}
                    onClick={() => goTo(index)}
                    onMouseEnter={() => sounds.tick()}
                    className={`group flex items-center gap-3 text-left text-xl uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "opacity-100 font-bold translate-x-3"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    {/* Active dot */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}

                    <span>{project.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Active project details box */}
          <div className="p-10 bg-black/35 backdrop-blur-sm text-white rounded-lg">
            {/* Top row: role + year */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title + "-meta"}
                initial={{ y: direction > 0 ? 10 : -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: direction > 0 ? -10 : 10, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex items-center justify-between gap-6"
              >
                <div className="text-lg uppercase tracking-widest opacity-90">
                  {activeProject.role}
                </div>
                <div className="text-md uppercase tracking-widest opacity-80 tabular-nums">
                  {activeProject.year}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeProject.title + "-desc"}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-lg leading-relaxed text-white/80"
              >
                {activeProject.description ?? "Add a description for this project."}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE CARD OVERLAY */}
        <div className="absolute bottom-6 left-0 right-0 z-10 px-4 md:hidden">
          <div className="rounded-xl bg-black/45 backdrop-blur-sm p-5 text-white">
            <div className="flex justify-between items-start gap-6">
              <div className="text-lg font-bold uppercase">
                {activeProject.title}
              </div>
              <div className="text-right text-xs uppercase tracking-widest opacity-80">
                <div>{activeProject.role}</div>
                <div className="tabular-nums">{activeProject.year}</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {activeProject.description ?? "Add a description for this project."}
            </p>

            {/* Mobile arrows */}
            <div className="mt-5 flex justify-between">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous"
                className="px-3 py-2 rounded-md bg-white/10"
              >
                ←
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next"
                className="px-3 py-2 rounded-md bg-white/10"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-4 text-sm text-white tabular-nums">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <span className="w-24 h-px bg-white/40" />
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
