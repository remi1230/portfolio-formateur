// src/components/Company/CompanySection.jsx
"use client";

import { useState } from 'react';
import { experiencesData } from './data';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import { AnimatePresence } from 'framer-motion';

function CompanySection() {
  const [selectedCompanyId, setSelectedCompanyId] = useState(experiencesData[0]?.id);
  const selectedCompany = experiencesData.find(exp => exp.id === selectedCompanyId);

  return (
    <section  id="projects" className="scroll-mt-20 min-h-[34vw] pt-10 pr-6 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        
        {/* --- COLONNE DE GAUCHE : DÉTAILS DE L'ENTREPRISE --- */}
        <div className="lg:w-1/2 p-8 rounded-xl h-fit order-2 lg:order-none">
          <AnimatePresence mode="wait">
            {selectedCompany ? (
              <CompanyDetails
                key={selectedCompany.id}
                experience={selectedCompany}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p>Sélectionnez une entreprise pour voir les détails.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* --- COLONNE DE DROITE : LISTE DES ENTREPRISES --- */}
        <div className="lg:w-1/2 pl-6 lg:pl-0 order-1 lg:order-none">
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

export default CompanySection;