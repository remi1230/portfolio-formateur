import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { articlesData } from '../data';
import Image from 'next/image';
import Link from 'next/link';

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
    <main className="prose prose-slate dark:prose-invert max-w-5xl px-4 mx-auto py-8">
      {/* Bouton retour */}
      <Link
        href="/article"
        className="btn btn-sm btn-outline  no-underline hover:bg-brand-important hover:text-brand-fg transition-colors duration-300"
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
          priority
        />
      </div>

      {/* Titre, chapeau, markdown */}
      <h1>{article.title}</h1>
      <p className="text-sm text-gray-500">{article.chapeau} • {article.dates}</p>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {fileContent}
      </ReactMarkdown>
    </main>
  );
}