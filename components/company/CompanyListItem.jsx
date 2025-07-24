// src/components/Company/CompanyListItem.jsx
import Image from 'next/image';

function CompanyListItem({ experience, isSelected, onSelect }) {
  const itemClassName = `
    flex items-center  gap-4 p-2 md:p-4 cursor-pointer
    transition-all duration-300 ease-in-out
    border border-transparent
    ${isSelected 
      ? 'hover:bg-white/10 bg-white/10' // Style pour l'item sélectionné
      : 'hover:bg-white/10' // Style par défaut et au survol
    }
  `;

  return (
    <div className={itemClassName} onClick={onSelect}>
      {/* L'image */}
      <div className="">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={40}
          height={40}
          className="rounded-lg object-contain"
        />
      </div>

      {/* Info : Nom et rôle */}
      <div className="flex-grow">
        <div className="font-semibold text-sm md:text-base">{experience.company}</div>
        <div className="text-xs md:text-sm">{experience.role}</div>
      </div>

      {/* Dates */}
      <div className="text-xs font-mono text-base-content/60 text-right">
        {experience.dates}
      </div>
    </div>
  );
}

export default CompanyListItem;