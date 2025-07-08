'use client';

import { motion } from 'framer-motion';

export default function AnimatedTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-blue-600 underline"
    >
      Hello world from Next.js!
    </motion.h1>
  );
}