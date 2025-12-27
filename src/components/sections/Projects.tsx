"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-sm font-medium tracking-[0.5em] uppercase text-muted-foreground mb-4">
              Selected Works
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
              Curated <br /> Projects
            </h3>
          </div>
          <div className="hidden md:block text-right text-muted-foreground text-sm tracking-widest uppercase">
            01 / 04
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/5 overflow-hidden mb-8 bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[0.22, 1, 0.36, 1] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="flex justify-between items-start border-t pt-6">
                <div>
                  <h4 className="text-2xl font-bold uppercase tracking-tighter mb-1">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground uppercase tracking-widest text-xs">
                    {project.role}
                  </p>
                </div>
                <div className="text-sm font-medium tabular-nums">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
