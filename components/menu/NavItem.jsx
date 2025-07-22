'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NavItem({ href, label, onClick }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async (e) => {
    e.preventDefault();
    onClick?.();

    const targetId = href.replace(/^#/, '');

    // Si on n'est pas déjà sur la racine, on navigue vers /
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }

    // Sinon on scroll comme avant
    const el = document.getElementById(targetId);
    if (!el) return;

    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;
    const style = window.getComputedStyle(el);
    const scrollMT = parseFloat(style.scrollMarginTop) || 0;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      scrollMT;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="btn btn-ghost btn-sm px-4 py-6 rounded-xl text-sm font-medium hover:bg-brand-hover-menu/10
        border border-transparent hover:border-brand-hover-brd-menu transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );
}