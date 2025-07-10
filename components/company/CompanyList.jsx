// src/components/Company/CompanyList.jsx

import CompanyListItem from './CompanyListItem';

function CompanyList({ experiences, selectedCompanyId, onCompanySelect }) {
  return (
    <div className="border-2 border-gray-700 rounded-xl overflow-hidden"> {/* Ajoute un espace vertical entre chaque item */}
      {experiences.map(exp => (
        <CompanyListItem
          key={exp.id}
          experience={exp}
          isSelected={exp.id === selectedCompanyId}
          onSelect={() => onCompanySelect(exp.id)}
        />
      ))}
    </div>
  );
}

export default CompanyList;