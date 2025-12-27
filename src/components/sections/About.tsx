"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Vertical label for editorial feel */}
          <div className="hidden md:block md:col-span-1">
            <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-medium tracking-[0.5em] uppercase text-muted-foreground pt-4">
              Behind the code
            </span>
          </div>

          <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 uppercase">
                A designer who <br /> understands engineering
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              <p>
                I’m a frontend developer with a strong focus on UI and user
                experience.
              </p>
              <p>
                I enjoy turning complex ideas into clean, intuitive interfaces
                that feel effortless to use. My work sits at the intersection of
                design and development — where layout, motion, and performance
                matter as much as the code behind them.
              </p>
              <p>
                I care deeply about visual hierarchy, interaction details, and
                building interfaces that scale well and age gracefully.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
