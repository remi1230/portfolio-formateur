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
    <section  id="projects" className="md:p-10 p-2 scroll-mt-20 min-h-[33vw] rounded-2xl gradient-cpn-bg">
      <div className="flex flex-col xl:flex-row xl:gap-10 max-w-7xl mx-auto">
        
        {/* --- COLONNE DE GAUCHE : DÉTAILS DE L'ENTREPRISE --- */}
        <div className="xl:w-1/2 rounded-xl h-fit order-2 xl:order-none">
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
        <div className="xl:w-1/2 order-1 xl:order-none">
          <h2 className="xl:text-4xl text-2xl font-bold mb-2">
            C'était un réel plaisir de <span className="text-brand-important">travailler ensemble</span>
          </h2>
          <p className="mb-2 md:mb-8 xl:text-base text-sm">
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