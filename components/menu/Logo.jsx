'use client';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/assets/images/logo.png" // ✅ Assure-toi que le fichier est bien dans /public/assets/
        alt="Logo Rémi Tafforeau"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
      <span className="text-xl text-brand-fg font-bold">Rémi Tafforeau</span>
    </div>
  );
}