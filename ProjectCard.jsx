"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 5,
        rotateY: 5,
        scale: 1.03
      }}
      className="card-bg rounded-3xl p-6 glow"
    >
      <h3 className="text-2xl font-bold gradient-text">
        {project.title}
      </h3>

      <p className="mt-4 text-gray-300">
        {project.desc}
      </p>
    </motion.div>
  );
}
