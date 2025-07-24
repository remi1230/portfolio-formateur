// src/components/Company/CompanyDetails.jsx
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <div className="w-[64px] h-[64px] hidden md:block mb-0 mt-6 xl:mt-0 xl:mb-6">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={64}
          height={64}
          className="rounded-lg object-contain"
        />
      </div>

      <h3 className="hidden xl:block text-4xl font-extrabold">{experience.company}</h3>

      <div className="badge badge-accent badge-lg mt-4 mb-2 md:mt-7 md:mb-7 text-sm md:text-base">{experience.role}</div>

      <article className="prose prose-sm 2xl:prose-base max-w-none text-left">
          <ReactMarkdown>{experience.description}</ReactMarkdown>
      </article>
    </motion.div>
  );
}

export default CompanyDetails;