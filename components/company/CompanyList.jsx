// src/components/Company/CompanyList.jsx

import CompanyListItem from './CompanyListItem';

function CompanyList({ experiences, selectedCompanyId, onCompanySelect }) {
  return (
    <div className="">
      <div className="border-2 border-gray-700 rounded-xl lg:overflow-hidden lg:block hidden max-h-64 lg:max-h-none overflow-y-auto">
        {experiences.map(exp => (
          <CompanyListItem
            key={exp.id}
            experience={exp}
            isSelected={exp.id === selectedCompanyId}
            onSelect={() => onCompanySelect(exp.id)}
          />
        ))}
      </div>
      {/* Liste déroulante en mobile */}
      <div className="block lg:hidden mt-4">
        <select
          id="company-select"
          className="select select-bordered w-full bg-brand-bg"
          value={selectedCompanyId}
          onChange={(e) => onCompanySelect(Number(e.target.value))}
        >
          {experiences.map((exp) => (
            <option key={exp.id} value={exp.id}>
              {exp.company} {/* Ou exp.title selon ton modèle */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CompanyList;