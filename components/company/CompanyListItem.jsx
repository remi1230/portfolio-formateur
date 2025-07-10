// src/components/Company/CompanyListItem.jsx

import Image from 'next/image'; // 1. Importer le composant Image

function CompanyListItem({ experience, isSelected, onSelect }) {
  const itemClassName = `
    flex items-center gap-4 p-4 cursor-pointer
    transition-all duration-300 ease-in-out
    border border-transparent
    ${isSelected 
      ? 'hover:bg-white/10 bg-white/10' // Style pour l'item sélectionné
      : 'hover:bg-white/10' // Style par défaut et au survol
    }
  `;

  return (
    <div className={itemClassName} onClick={onSelect}>
      {/* 2. Remplacer la structure de l'image */}
      <div className="avatar">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={40}  // 3. Spécifier une largeur
          height={40} // 4. Spécifier une hauteur
          className="rounded-lg object-contain" // Appliquer les styles directement
        />
      </div>

      {/* Info : Nom et rôle */}
      <div className="flex-grow">
        <div className="font-semibold">{experience.company}</div>
        <div className="text-sm text-base-content/70">{experience.role}</div>
      </div>

      {/* Dates */}
      <div className="text-xs font-mono whitespace-nowrap text-base-content/60">
        {experience.dates}
      </div>
    </div>
  );
}

export default CompanyListItem;