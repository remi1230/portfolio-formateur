// app/components/MarkdownRenderer.jsx
'use client'; // Indique que c'est un composant client

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Importez Prism.js
import Prism from 'prismjs';

/*import 'prismjs/components/prism-clike'; 
import 'prismjs/components/prism-markup';*/

// Importez un thème CSS de Prism.js (choisissez celui qui convient à votre design)
import 'prismjs/themes/prism-okaidia.css'; // Thème sombre populaire
// import 'prismjs/themes/prism-tomorrow.css'; // Thème clair


import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-yaml';

//import 'prismjs/components/prism-php';


export default function MarkdownRenderer({ content }) {
  // useEffect pour s'assurer que Prism.js colore le code après le rendu du Markdown
  useEffect(() => {
    // `Prism.highlightAll()` recherche tous les blocs `<code>` avec une classe `language-xxx`
    // et applique la coloration syntaxique.
    Prism.highlightAll();
  }, [content]); // Re-exécute la coloration si le contenu Markdown change

  // Personnalisation du rendu des balises HTML par ReactMarkdown
  const customComponents = {
    // Intercepte la balise <pre> générée par ReactMarkdown pour les blocs de code.
    // C'est ici que nous allons gérer le rendu complet du bloc de code avec Prism.js.
    pre: ({ node, children, ...props }) => {
      // Les enfants de <pre> seront généralement un seul élément <code>.
      const codeChild = children && children[0];

      // Vérifie si l'enfant est bien un élément <code> et qu'il a des props.
      if (codeChild && codeChild.type === 'code' && codeChild.props) {
        const className = codeChild.props.className || '';
        const match = /language-(\w+)/.exec(className);
        const language = match ? match[1] : ''; // Extraire le nom du langage (ex: 'js', 'jsx')

        // Le contenu textuel du code se trouve dans les enfants de la balise <code>.
        const codeContent = codeChild.props.children;

        // Filtrer l'attribut `tabIndex` des props de la balise `code` interne.
        // `rehypeRaw` ou `remarkGfm` peuvent l'ajouter, causant une mismatch d'hydratation.
        const { tabIndex, ...restCodeProps } = codeChild.props;

        return (
          // Rendre une seule balise <pre> avec la classe de langage requise par Prism.js.
          // Les props du <pre> original sont passées ici.
          <pre className={`language-${language} border-4 border-slate-500`} {...props}>
            {/* Rendre une seule balise <code> à l'intérieur du <pre>, avec les props filtrées. */}
            <code className={`language-${language}`} {...restCodeProps}>
              {/* Passer le contenu du code, en supprimant le saut de ligne final indésirable. */}
              {String(codeContent).replace(/\n$/, '')}
            </code>
          </pre>
        );
      }

      // Si le contenu de <pre> n'est pas un <code> valide (cas rare ou Markdown mal formé),
      // nous rendons le <pre> par défaut pour éviter de casser l'affichage.
      return <pre {...props}>{children}</pre>;
    },

    // La balise `code` ne sera interceptée ici que pour le code inline (ex: `code`).
    // Les blocs de code sont gérés par l'interception de `pre` ci-dessus.
    // Nous filtrons également `tabIndex` ici, au cas où il serait ajouté au code inline.
    code: ({ node, inline, className, children, ...props }) => {
      const { tabIndex, ...restProps } = props;
      // Si c'est du code inline, on le rend directement.
      if (inline) {
        return (
          <code className={className} {...restProps}>
            {children}
          </code>
        );
      }
      // Si ce n'est pas inline, c'est un <code> à l'intérieur d'un <pre>.
      // Cette branche ne devrait normalement pas être atteinte si `pre` est correctement intercepté.
      // Cependant, on le laisse pour la robustesse.
      return (
        <code className={className} {...restProps}>
          {children}
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
        rehypePlugins={[rehypeRaw]}
        components={customComponents} // Passez nos rendus personnalisés
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}