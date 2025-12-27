"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:py-48">
      <div className="mx-auto max-w-7xl text-center md:text-left">
        <div className="mb-20">
          <h2 className="text-sm font-medium tracking-[0.5em] uppercase text-muted-foreground mb-4">
            Get in touch
          </h2>
          <div className="h-px w-full bg-border" />
        </div>

        <div className="max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-12 leading-[1.1]"
          >
            Open to frontend and UI-focused roles, collaborations, and
            meaningful projects.
          </motion.h3>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shbl.salim@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-4 text-3xl md:text-5xl font-bold tracking-tighter uppercase border-b-2 border-foreground pb-2"
            >
              Let's Talk
              <ArrowUpRight className="size-8 md:size-12 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <div className="flex gap-8">
              <a
                href="https://github.com/shbl007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shibil-salim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-48 text-center text-xs tracking-[0.5em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Shibil Salim. All rights reserved.
        </div>
      </div>
    </section>
  );
}
