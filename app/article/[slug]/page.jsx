// app/article/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { articlesData } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpCircle } from 'lucide-react';
import dynamic from 'next/dynamic'; // Importez dynamic de next/dynamic

// Importez le composant MarkdownRenderer que nous avons créé.
// Nous allons le charger dynamiquement.
// import MarkdownRenderer from '../../components/MarkdownRenderer'; // Ne l'importez plus directement ici

// Chargez dynamiquement le MarkdownRenderer avec SSR désactivé
const DynamicMarkdownRenderer = dynamic(
  () => import('../../../components/utils/MarkdownRenderer'),
  { ssr: false } // Ceci est la clé : ne pas rendre ce composant côté serveur
);


export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const filePath = path.join(process.cwd(), 'app/article/content', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <main id="page-top" className="scroll-mt-20 prose prose-slate dark:prose-invert max-w-5xl px-4 mx-auto py-8">
      {/* Bouton retour */}
      <Link
        href="/article"
        className="btn btn-sm btn-outline no-underline hover:bg-brand-important hover:text-brand-fg transition-colors duration-300"
      >
        ← Retour à la liste
      </Link>

      {/* Illustration en haut */}
      <div className="flex justify-center mb-4">
        <Image
          src={article.illustration.slice(0, article.illustration.lastIndexOf('.')) + '-hd.gif'}
          alt={article.title}
          width={200}
          height={200}
          className="object-contain rounded-lg"
          unoptimized
        />
      </div>

      {/* Titre, chapeau, markdown */}
      <h1>{article.title}</h1>
      <p className="text-sm text-gray-500">{article.chapeau} • {article.dates}</p>

      {/* Utilisez le composant chargé dynamiquement ici */}
      <DynamicMarkdownRenderer
        content={fileContent}
        // RETIREZ LA PROP rehypePlugins ENTIÈREMENT SI VOUS NE L'AVEZ PAS BESOIN AILLEURS
        // OU SI VOUS L'AVEZ DANS LE MARKDOWNRENDERER, ASSUREZ-VOUS QU'ELLE EST RETIRÉE LÀ-BAS.
        // Dans votre cas, MarkdownRenderer ne prend pas de prop rehypePlugins,
        // donc le problème est dans l'appel interne de ReactMarkdown dans MarkdownRenderer.
        // Nous allons donc nous concentrer sur la modification de MarkdownRenderer.jsx
      />
      
      <div className="w-full flex justify-end gap-6">
        <Link
          href="/article"
          className="btn btn-sm btn-outline no-underline hover:bg-brand-important hover:text-brand-fg transition-colors duration-300"
        >
          ← Retour à la liste
        </Link>
        <Link
          data-tip="Haut de page"
          href="#page-top"
          className="tooltip tooltip-accent btn btn-sm btn-outline no-underline hover:bg-brand-important hover:text-brand-fg transition-colors duration-300"
        >
          <ArrowUpCircle className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}