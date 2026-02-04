"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

type TypewriterTextProps = {
  text: string | string[];
  className?: string;
  startDelay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorChar?: string;
};

export function TypewriterText({
  text,
  className = "",
  startDelay = 600,
  typingSpeed = 40,
  deletingSpeed = 30,
  pause = 1200,
  loop = false,
  cursor = true,
  cursorChar = "|",
}: TypewriterTextProps) {
  const sequence = Array.isArray(text)
    ? text.flatMap((t) => [t, pause])
    : [text];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <TypeAnimation
        sequence={sequence}
        // speed={typingSpeed}
        // deletionSpeed={deletingSpeed}
        // delay={startDelay}
        repeat={loop ? Infinity : 0}
        cursor={cursor}
        style={{
          whiteSpace: "pre-line",
        }}
        className={`${className} ${
          cursor ? `after:content-['${cursorChar}']` : ""
        }`}
      />
    </motion.div>
  );
}
