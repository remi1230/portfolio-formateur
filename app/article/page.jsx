'use client'; // Indique que c'est un composant client

import { useState, useMemo } from 'react'; // Importez useState et useMemo
import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from './data'; // Assurez-vous que articlesData est bien un tableau d'articles
import clsx from 'clsx'; // Pour fusionner les classes Tailwind si nécessaire
import { motion, AnimatePresence } from 'framer-motion'; // Importez motion et AnimatePresence

export default function ArticleListPage() {
  const articlesPerPage = 6; // Nombre d'articles à afficher par page
  const [currentPage, setCurrentPage] = useState(1); // État pour la page actuelle, commence à 1

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  // Utiliser useMemo pour optimiser le calcul des articles affichés sur la page actuelle
  const currentArticles = useMemo(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    return articlesData.slice(indexOfFirstArticle, indexOfLastArticle);
  }, [currentPage, articlesData, articlesPerPage]); // Recalculer si la page ou les données changent

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Générer les numéros de page pour la pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

// La nouvelle page apparaît en zoomant, l'ancienne disparaît en dézoomant.
const zoomVariants = {
  initial: { opacity: 0, scale: 0.8 }, // Commence plus petit et invisible
  animate: { opacity: 1, scale: 1 },   // Se met à l'échelle normale
  exit: { opacity: 0, scale: 0.8 },    // Disparaît en dézoomant
}; //GOOD ++

const defaultTransition = { duration: 0.5, ease: "easeInOut" };


  return (
    <main className="px-4 py-8 md:px-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>

      {/* Grille des articles */}
      {/* AnimatePresence permet d'animer les composants qui sont retirés de l'arbre DOM */}
      <AnimatePresence mode="wait"> {/* 'wait' attend que l'animation de sortie soit terminée avant d'animer l'entrée */}
        <motion.div
          key={currentPage} // C'est crucial : changer la clé force Framer Motion à considérer que c'est un "nouveau" composant et à déclencher l'animation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={zoomVariants} // Utilisez les variantes définies
          initial="initial"
          animate="animate"
          exit="exit"
          transition={defaultTransition} // Durée et type d'accélération de l'animation
        >
          {currentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="card group flex flex-col h-full bg-brand-bg-card border border-gray-300
              shadow-md transition duration-300 ease-in-out transform-gpu hover:shadow-lg
              hover:ring-2 hover:ring-brand-important hover:scale-102 hover:-translate-y-1 cursor-pointer
              will-change-transform"
            >
              <figure className="p-4 w-full h-40 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex justify-center">
                  <Image
                      src={article.illustration}
                      alt={article.title}
                      width={200}
                      height={200}
                      unoptimized
                      className="object-contain"
                  />
                  </div>
              </figure>

              <div className="card-body flex-1 p-4">
                  <h2 className="card-title text-brand-fg-card-title justify-center text-center">{article.title}</h2>
                  <p className="text-sm text-brand-fg-card-subtitle text-center">{article.chapeau}</p>
              </div>

              <div className="card-actions justify-center p-4">
                  <span className="text-xs text-brand-fg-card-date">{article.dates}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Composant de pagination */}
      {totalPages > 1 && ( // Afficher la pagination seulement s'il y a plus d'une page
        <nav className="flex justify-center mt-8">
          <ul className="pagination flex space-x-2">
            {/* Bouton Précédent */}
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={clsx(
                  "btn btn-sm btn-outline",
                  { "btn-disabled": currentPage === 1 } // DaisyUI class for disabled button
                )}
              >
                Précédent
              </button>
            </li>

            {/* Numéros de page */}
            {pageNumbers.map(number => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={clsx(
                    "btn btn-sm btn-outline",
                    { "btn-active": number === currentPage, "btn-important": number === currentPage } // DaisyUI active classes
                  )}
                >
                  {number}
                </button>
              </li>
            ))}

            {/* Bouton Suivant */}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={clsx(
                  "btn btn-sm btn-outline",
                  { "btn-disabled": currentPage === totalPages } // DaisyUI class for disabled button
                )}
              >
                Suivant
              </button>
            </li>
          </ul>
        </nav>
      )}
    </main>
  );
}