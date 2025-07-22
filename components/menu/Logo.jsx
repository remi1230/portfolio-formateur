'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    if (pathname !== '/') {
      router.push('/');
    } else {
      // Scroll tout en haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className="btn btn-ghost py-6 rounded-xl hover:bg-brand-hover-menu/10 flex items-center space-x-0 md:space-x-1 cursor-pointer
      border border-transparent hover:border-brand-hover-brd-menu transition-colors duration-300"
    >
      <Image
        src="/assets/images/logoSite.png"
        alt="Logo Rémi Tafforeau"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
      <span className="text-xl md:text-2xl text-brand-fg font-bold">Rémi Tafforeau</span>
    </a>
  );
}