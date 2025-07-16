'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="#hero" className="btn btn-ghost py-6 rounded-xl hover:bg-white/10 flex items-center space-x-0 md:space-x-1 cursor-pointer">
      <Image
        src="/assets/images/logoSite.png"
        alt="Logo Rémi Tafforeau"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
      <span className="text-xl md:text-2xl text-brand-fg font-bold">Rémi Tafforeau</span>
    </Link>
  );
}
