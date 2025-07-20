// app/components/MarkdownRenderer.jsx
'use client'; // Indique que c'est un composant client

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import clsx from 'clsx';

// Importez Prism.js
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

// ========================================================================================
// IMPORTS POUR LE PLUGIN TOOLBAR DE PRISM.JS
// ========================================================================================
import 'prismjs/plugins/toolbar/prism-toolbar.css'; // Le CSS pour la barre d'outils
import 'prismjs/plugins/toolbar/prism-toolbar.js'; // Le JS du plugin barre d'outils
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'; // Le JS du plugin copier-coller
// ========================================================================================


import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-yaml';

const PRISM_THEMES = {
  'dark': 'prism-one-dark.css',
  'light': 'prism-lucario.css',
};
// ========================================================================================


export default function MarkdownRenderer({ content }) {
  // Fonction pour appliquer le thème Prism.js et relancer la coloration
  const applyPrismThemeAndHighlight = () => {
    // 1. Détecter le thème actuel de la page
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark'; // Par défaut à 'light'

    // 2. Obtenir le nom du fichier CSS du thème Prism.js correspondant
    const themeFileName = PRISM_THEMES[currentTheme] || PRISM_THEMES['dark']; // Fallback si le thème n'est pas mappé

    // 3. Retirer les anciens liens de thème Prism.js pour éviter les conflits
    document.querySelectorAll('link[data-prism-theme]').forEach(link => link.remove());

    // 4. Créer et ajouter le nouveau lien de thème CSS au <head>
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/prism-themes/${themeFileName}`; // Chemin vers votre dossier public/prism-themes
    link.setAttribute('data-prism-theme', currentTheme); // Attribut personnalisé pour le suivi
    document.head.appendChild(link);

    // 5. Relancer la coloration syntaxique après l'application du nouveau thème
    // Utiliser un setTimeout pour donner le temps au CSS d'être appliqué par le navigateur
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.Prism && window.Prism.highlightAll) {
        // Optionnel: Re-configurer le chemin de l'autoloader si nécessaire (si non géré globalement)
        // if (window.Prism.autoloader && !window.Prism.autoloader.path) {
        //   window.Prism.autoloader.path = '/prism-components/'; 
        //   window.Prism.autoloader.use_minified = true;
        // }
        window.Prism.highlightAll();
      }
    }, 50); // Un petit délai pour s'assurer que le CSS est appliqué
  };


  useEffect(() => {
    // Appliquer le thème et surligner au montage initial et chaque fois que le contenu change
    applyPrismThemeAndHighlight();

    // Observer les changements de l'attribut 'data-theme' sur la balise <html>
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          //console.log('data-theme a changé. Mise à jour du thème Prism.js.');
          applyPrismThemeAndHighlight(); // Réappliquer le thème et la coloration
        }
      });
    });

    // Commencer à observer la balise <html> pour les changements d'attributs
    observer.observe(document.documentElement, { attributes: true });

    // Fonction de nettoyage : retirer le lien CSS du thème et déconnecter l'observateur
    return () => {
      document.querySelectorAll('link[data-prism-theme]').forEach(link => link.remove());
      observer.disconnect();
    };

  }, [content]); // Dépendance sur 'content' pour re-exécuter si le contenu Markdown change


  // Vos classes personnalisées pour les blocs de code
  const customClasses = ['border-1', 'border-brand-bordcode-fg', 'line-numbers'];

  // Personnalisation du rendu des balises HTML par ReactMarkdown
  const customComponents = {
    // Intercepte la balise <pre> générée par ReactMarkdown pour les blocs de code.
    // C'est ici que nous allons gérer le rendu complet du bloc de code avec Prism.js.
    pre: ({ node, children, ...props }) => {
      // Destructurez la classe et le tabindex de ReactMarkdown pour <pre>
      const { className: preOriginalClassName, tabIndex: preTabIndex, ...restPreProps } = props;

      // IMPORTANT : Utiliser React.Children.toArray pour s'assurer que children est un tableau
      // et trouver l'élément <code> de manière fiable.
      const childrenArray = React.Children.toArray(children);
      const codeChild = childrenArray.find(
        child => React.isValidElement(child) && child.type === 'code'
      );

      // Vérifie si un élément <code> valide a été trouvé
      if (codeChild) {
        // Extraire le langage de la balise <code> enfant
        const codeChildClassName = codeChild.props.className || '';
        const match = /language-(\w+)/.exec(codeChildClassName);
        const language = match ? match[1] : '';

        // Le contenu textuel du code se trouve dans les enfants de la balise <code>.
        const codeContent = codeChild.props.children;

        // Filtrer l'attribut `tabIndex` des props de la balise `code` interne.
        // `rehypeRaw` ou `remarkGfm` peuvent l'ajouter, causant une mismatch d'hydratation.
        const { tabIndex: codeChildTabIndex, ...restCodeChildProps } = codeChild.props;


        return (
          <pre
            // Utilise clsx pour fusionner les classes:
            // 1. Les classes originales passées par ReactMarkdown pour <pre> (preOriginalClassName)
            // 2. La classe de langage (`language-${language}`)
            // 3. Vos classes personnalisées (customClasses)
            className={clsx(
              preOriginalClassName, // Classes originales de ReactMarkdown pour <pre>
              language && `language-${language}`, // Ajoute la classe de langage si elle n'est pas déjà présente
              ...customClasses // <-- Utilise vos classes personnalisées ici
            )}
            data-toolbar // <-- AJOUTEZ CET ATTRIBUT POUR ACTIVER LA TOOLBAR
            {...restPreProps} // Passe les props restantes de <pre> (sans className et tabIndex)
          >
            {/* Rendre la balise <code> avec ses props et son contenu */}
            <code 
              className={clsx(
                codeChildClassName, // Classes originales du <code> enfant
                `language-${language}` // S'assurer que la classe de langage est aussi sur le <code>
              )}
              {...restCodeChildProps} // Passe les props restantes du <code> (sans tabIndex)
            >
              {/* Passer le contenu du code directement */}
              {codeContent} 
            </code>
          </pre>
        );
      }

      // Si le contenu de <pre> n'est pas un <code> valide (cas rare ou Markdown mal formé),
      // nous rendons le <pre> par défaut pour éviter de casser l'affichage.
      // Assurez-vous que className et tabIndex sont gérés même dans ce cas.
      //console.warn("Composant PRE - Pas de <code> enfant valide trouvé. Rendu fallback.");
      return (
        <pre
          className={clsx(
            preOriginalClassName, // Utilise clsx pour gérer la className originale
            ...customClasses // <-- Utilise vos classes personnalisées ici
          )}
          data-toolbar // <-- AJOUTEZ CET ATTRIBUT POUR ACTIVER LA TOOLBAR SUR LE FALLBACK
          {...restPreProps} // Passe les props restantes (sans className et tabIndex)
        >
          {children}
        </pre>
      );
    },

    // La balise `code` sera interceptée ici pour le code inline ET pour les blocs de code.
    // ReactMarkdown passe la balise <code> comme enfant du <pre> pour les blocs de code.
    code: ({ node, inline, children, ...props }) => {
      // Destructurez la classe et le tabindex de ReactMarkdown pour <code>
      const { className: codeOriginalClassName, tabIndex: codeTabIndex, ...restCodeProps } = props;

      // Si c'est du code inline
      if (inline) {
        return (
          <code
            className={clsx(
              codeOriginalClassName, // Classes originales de ReactMarkdown pour le code inline
              'bg-brand-bg-highlight',
              'rounded-md',
              'px-1'
            )}
            {...restCodeProps} // Passe les props restantes (sans className et tabIndex)
          >
            {children} {/* Rendre les children directement pour le code inline */}
          </code>
        );
      }
      // Si ce n'est pas inline (c'est un <code> à l'intérieur d'un <pre>)
      // On s'assure que la classe de langage est présente pour Prism.js
      return (
        <code
          className={clsx(
            codeOriginalClassName, // Classes originales de ReactMarkdown (ex: "language-bash")
          )}
          {...restCodeProps} // Passe les props restantes (sans className et tabIndex)
        >
          {children} {/* Rendre les children directement pour les blocs de code */}
        </code>
      );
    },
  };

  return (
    // Les classes Tailwind pour les blocs de code sont appliquées ici.
    // Elles styliseront le conteneur <pre> que nous rendons.
    <div className="prose-pre:bg-brand-pre-bg prose-pre:text-brand-pre-fg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // RETIREZ OU COMMENTEZ LA LIGNE SUIVANTE SI VOUS L'AVEZ DANS VOTRE APPEL À <ReactMarkdown>
        // rehypePlugins={[rehypeRaw]} 
        components={customComponents} // Passez nos rendus personnalisés
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
