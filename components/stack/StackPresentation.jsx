"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// --- Importez vos icônes ---
import {
  FaReact,
  FaNodeJs,
  FaSymfony,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiFramer,
  SiDaisyui,
  SiGit,
  SiFigma,
} from "react-icons/si";

// --- Le tableau original des technos, dans l’ordre de la grille ---
const technologies = [
  { name: "Next.js",      icon: SiNextdotjs, tileBg: "#ffffff", iconColor: "#000000" }, 
  { name: "Symfony",      icon: FaSymfony,   tileBg: "#000000", iconColor: "#ffffff" },
  { name: "Node.js",      icon: FaNodeJs,    tileBg: "#8bc500", iconColor: "#ffffff" },
  { name: "React",        icon: FaReact,     tileBg: "#61dafb", iconColor: "#ffffff" },
  { name: "PHP",          icon: FaPhp,       tileBg: "#777BB4", iconColor: "#ffffff" },
  { name: "MongoDB",      icon: SiMongodb,   tileBg: "#ffffff", iconColor: "#47A248" },
  { name: "MySQL",        icon: SiMysql,     tileBg: "oklch(93% 0.07 255)", iconColor: "oklch(7% 0.07 255)" },
  { name: "PostgreSQL",   icon: SiPostgresql,tileBg: "#32638c", iconColor: "#ffffff" },
  { name: "HTML5",        icon: FaHtml5,     tileBg: "#E34F26", iconColor: "#ffffff" },
  { name: "CSS3",         icon: FaCss3Alt,   tileBg: "#1572B6", iconColor: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss,tileBg:"oklch(93% 0.01 255)", iconColor: "#36bef8" },
  { name: "DaisyUI",      icon: SiDaisyui,   tileBg: "#ff69b4", iconColor: "#ffffff" },
  { name: "Bootstrap",    icon: FaBootstrap, tileBg: "#7c09f8", iconColor: "#ffffff" },
  { name: "Framer Motion",icon: SiFramer,    tileBg: "oklch(93% 0.01 255)", iconColor: "#0055FF" },
  { name: "Git",icon: SiGit,    tileBg: "#f05033", iconColor: "#ffffff" },
  { name: "Figma",icon: SiFigma,    tileBg: "#0ACF83", iconColor: "#ffffff" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// On définit un variant qui accepte un “custom” pour le delay
const itemVariants = {
  hidden: { scale: 0, opacity: 0, y: 20 },
  visible: (delayIndex) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delayIndex * 0.1,
    },
  }),
};

export default function StackPresentation() {
  // 1) Générer une liste d’indices random pour animer les cases dans un ordre aléatoire
  const [shuffle] = useState(() =>
    Array.from({ length: technologies.length }, (_, i) => i)
      .sort(() => Math.random() - 0.5)
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-4 gap-6 min-h-[200px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
    {technologies.map((tech, index) => {
        const delayIndex = shuffle.indexOf(index);
        const Icon = tech.icon;

        return (
            <motion.div
            key={tech.name}
            className="mask mask-squircle p-[12px] flex items-center justify-center"
            style={{ backgroundColor: tech.tileBg }}
            variants={itemVariants}
            custom={delayIndex}
            title={tech.name}
            >
            <Icon className="w-[64px] h-[64px]" style={{ color: tech.iconColor }} />
            </motion.div>
        );
    })}

    </motion.div>
  );
}
