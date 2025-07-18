'use client';

import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from './data';

export default function ArticleListPage() {
  return (
    <main className="px-4 py-8 md:px-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className="card flex flex-col h-full bg-brand-bg-card border border-gray-300 shadow-xl
            transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
            >
            <figure className="p-4 w-full h-40 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                <Image
                    src={article.illustration}
                    alt={article.title}
                    fill
                    priority
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
      </div>
    </main>
  );
}
