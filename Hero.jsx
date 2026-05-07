"use client";

import { motion } from "framer-motion";
import TechSphere from "./TechSphere";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10">
      <div className="flex-1 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight"
        >
          Hi, I'm
          <span className="gradient-text"> Harry</span>
        </motion.h1>

        <p className="text-xl mt-6 text-gray-300 max-w-xl">
          Full-Stack Web Developer & AI Enthusiast.
          Building futuristic experiences with modern web technologies.
        </p>

        <div className="mt-8 flex gap-5">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyanGlow text-black font-bold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-cyanGlow"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="w-full md:w-[500px] h-[500px]">
        <TechSphere />
      </div>
    </section>
  );
}
