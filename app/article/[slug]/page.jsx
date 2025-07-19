// app/article/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
// ReactMarkdown, rehypeRaw, remarkGfm ne sont plus directement nécessaires ici
// car ils sont encapsulés dans MarkdownRenderer
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import remarkGfm from 'remark-gfm';
import { articlesData } from '../data'; // Assurez-vous que le chemin est correct
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpCircle } from 'lucide-react';

// Importez le nouveau composant client
import MarkdownRenderer from '../../../components/utils/MarkdownRenderer';


export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  // Next.js Server Components peuvent lire des fichiers directement
  const filePath = path.join(process.cwd(), 'app/article/content', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    // La classe 'prose' principale est sur la balise <main>
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

      {/* Utilisez le composant client pour le rendu du Markdown et la coloration */}
      <MarkdownRenderer content={fileContent} />
      
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