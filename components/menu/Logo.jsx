// menu/Logo.jsx
'use client'; // Garde le use client si Next.js l'exige

import Image from 'next/image';

export default function Logo() {
  return (
    // J'ai ajouté 'ml-2' pour un peu d'espace avec le bouton burger si présent
    <div className="flex items-center space-x-2 ml-2">
      <Image
        src='/assets/images/logoSite.png'
        alt="Logo Rémi Tafforeau"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
      <span className="text-2xl text-brand-fg font-bold">Rémi Tafforeau</span>
    </div>
  );
}