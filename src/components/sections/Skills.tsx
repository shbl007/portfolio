"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-sm font-medium tracking-[0.5em] uppercase text-muted-foreground mb-4">
            Tech Stack & Capabilities
          </h2>
          <div className="h-px w-full bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-6">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li key={skill}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-foreground transition-colors cursor-default inline-block relative group"
                    >
                      <span className="text-lg">{skill}</span>
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
