"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-medium tracking-[0.5em] uppercase text-muted-foreground mb-4">
              Career Path
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase sticky top-24">
              Experience <br /> & Impact
            </h3>
          </div>

          <div className="md:col-span-8 space-y-24">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tighter">
                    {exp.company}
                  </h4>
                  <div className="h-px grow bg-border mx-4 hidden md:block" />
                  <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-lg font-medium uppercase tracking-widest">
                    {exp.role}
                  </div>
                  <ul className="space-y-4 text-muted-foreground leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-foreground before:rounded-full"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
