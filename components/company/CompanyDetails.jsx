// src/components/Company/CompanyDetails.jsx

import Image from 'next/image'; // 1. Importer le composant

function CompanyDetails({ experience }) {
  if (!experience) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Sélectionnez une entreprise pour voir les détails.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="avatar mb-6">
        <div className="w-24 rounded-xl bg-white p-2 shadow-lg">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={80}  // 3. Spécifier la largeur
            height={80} // 4. Spécifier la hauteur
          />
        </div>
      </div>

      <h3 className="text-3xl font-extrabold text-base-content">{experience.company}</h3>

      {/* La classe "badge" de DaisyUI est parfaite pour le rôle */}
      <div className="badge badge-accent badge-lg my-4">{experience.role}</div>

      <div
        className="text-base-content/80 leading-relaxed text-left w-full prose"
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
    </div>
  );
}

export default CompanyDetails;