'use client'; // Indique que c'est un composant client

import { useState, useMemo } from 'react'; // Importez useState et useMemo
import Link from 'next/link';
import Image from 'next/image';
import Pagination from './Pagination';
import { articlesData } from './data'; // Assurez-vous que articlesData est bien un tableau d'articles
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
};

const defaultTransition = { duration: 0.5, ease: "easeInOut" };


  return (
    <main className="2xl:px-12 md:px-24 px-12 py-8 2xl:max-w-5xl max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-4 pb-2">
        <h1 className="text-3xl font-bold text-center">Articles</h1>
        <div className="block 2xl:hidden">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPaginate={paginate}
          />
        </div>
      </div>
      {/* Grille des articles */}
      {/* AnimatePresence permet d'animer les composants qui sont retirés de l'arbre DOM */}
      <AnimatePresence mode="wait"> {/* 'wait' attend que l'animation de sortie soit terminée avant d'animer l'entrée */}
        <motion.div
          key={currentPage} // Changer la clé force Framer Motion à considérer que c'est un "nouveau" composant et à déclencher l'animation
          className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-6 relative
          overflow-x-hidden max-h-[64vh] xl:max-h-none"
          variants={zoomVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={defaultTransition} // Durée et type d'accélération de l'animation
        >
          {currentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="relative z-10 card  flex flex-col h-full bg-brand-bg-card border border-gray-300
              shadow-md transition duration-300 ease-in-out transform-gpu hover:shadow-lg
              hover:ring-2 hover:ring-brand-important hover:scale-102 hover:-translate-y-1 cursor-pointer
              will-change-transform"
            >
              <figure className="p-4 w-full flex items-center justify-center overflow-hidden">
                  <div className="relative 2xl:w-30 2xl:h-30 w-20 h-20">
                  <Image
                      src={article.illustration}
                      alt={article.title}
                      fill
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
      <div className="mt-4 hidden 2xl:block">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPaginate={paginate}
        />
      </div>
    </main>
  );
}