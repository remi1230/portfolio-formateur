// src/components/Company/CompanyDetails.jsx
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { motion } from 'framer-motion'; // <<< ADDED THIS LINE

function CompanyDetails({ experience }) {
  if (!experience) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Sélectionnez une entreprise pour voir les détails.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0,}}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-[64px] h-[64px] havatar mb-6 hidden lg:flex">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={64}
          height={64}
          className="rounded-lg object-contain"
        />
      </div>

      <h3 className="text-3xl font-extrabold">{experience.company}</h3>

      <div className="badge badge-accent badge-lg my-4">{experience.role}</div>

      <article className="pt-4 prose prose-sm md:prose-base prose-slate dark:prose-invert max-w-none text-left">
          <ReactMarkdown>{experience.description}</ReactMarkdown>
      </article>
    </motion.div>
  );
}

export default CompanyDetails;