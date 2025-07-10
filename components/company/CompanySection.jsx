// src/components/Company/Company.jsx
"use client";

import { useState } from 'react';
import { experiencesData } from './data';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';

function Company() {
  const [selectedCompanyId, setSelectedCompanyId] = useState(experiencesData[0]?.id);
  const selectedCompany = experiencesData.find(exp => exp.id === selectedCompanyId);

  return (
    <section className="pt-10 pb-10 pr-4 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        
        {/* --- COLONNE DE GAUCHE : DÉTAILS DE L'ENTREPRISE --- */}
        {/* La colonne des détails passe à gauche */}
        <div className="lg:w-1/2 p-8 rounded-xl h-fit">
          <CompanyDetails experience={selectedCompany} />
        </div>

        {/* --- COLONNE DE DROITE : LISTE DES ENTREPRISES --- */}
        {/* La colonne de la liste passe à droite */}
        <div className="lg:w-1/2">
          {/* Le titre est maintenant ici */}
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-2">
            C'était un réel plaisir de <span className="text-brand-important">travailler ensemble</span>
          </h2>
          <p className="text-base-content/70 mb-8">
            Merci à toutes les entreprises qui m'ont fait confiance ↓
          </p>
          <CompanyList
            experiences={experiencesData}
            selectedCompanyId={selectedCompanyId}
            onCompanySelect={setSelectedCompanyId}
          />
        </div>

      </div>
    </section>
  );
}

export default Company;