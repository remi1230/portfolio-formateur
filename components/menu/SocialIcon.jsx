'use client';

import Link from 'next/link';

export default function SocialIcon({ href, children, download = false }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      className="w-12 h-12 flex items-center justify-center border border-brand-fg rounded-lg bg-transparent text-brand-fg hover:bg-brand-fg hover:text-brand-bg transition-colors duration-300"
    >
      {children}
    </Link>
  );
}