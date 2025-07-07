import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-3xl font-bold text-blue-600 underline">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello world from Next.js!
      </motion.h1>
      <div className="p-10">
        <button className="btn btn-primary">Test DaisyUI</button>
      </div>
      <div className="p-10">
        <Image
          src="/assets/images/icon-node-js.svg"
          alt="Logo Node.js"
          width={120}
          height={120}
          priority // ⬅️ pour Next.js, équivalent à fetchpriority
          fetchPriority="high" // nouvelle API HTML5
        />
      </div>
    </div>
  );
}
