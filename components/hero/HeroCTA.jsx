import Link from 'next/link';

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="#contact"
        className="px-6 py-2 rounded-md bg-brand-fg text-brand-bg font-semibold hover:bg-brand-important hover:text-brand-fg transition-colors duration-300"
      >
        Me contacter
      </Link>
      <Link
        href="#projects"
        className="px-6 py-2 btn btn-outline hover:bg-brand-important hover:text-brand-fg transition-colors duration-300"
      >
        Voir mes projets
      </Link>
    </div>
  );
}