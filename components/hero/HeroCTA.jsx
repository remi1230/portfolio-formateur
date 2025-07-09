import Link from 'next/link';

export default function HeroCTA() {
  return (
    <div className="flex space-x-4">
      <Link
        href="#contact"
        className="px-6 py-2 rounded-md bg-brand-fg text-brand-bg font-semibold hover:bg-brand-hover transition-colors duration-300"
      >
        Me contacter
      </Link>
      <Link
        href="#projects"
        className="px-6 py-2 rounded-md border border-brand-fg text-brand-fg hover:bg-brand-fg hover:text-brand-bg transition-colors duration-300"
      >
        Voir mes projets
      </Link>
    </div>
  );
}