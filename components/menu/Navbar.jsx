'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import NavItem from './NavItem';
import SocialIcon from './SocialIcon';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: '/#about', label: 'À propos' },
    { href: '/#skills', label: 'Compétences' },
    { href: '/#projects', label: 'Projets' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0f172a]/70 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* À gauche : Menu burger + Logo/Nom */}
        <div className="flex items-center space-x-3">
          {/* Burger uniquement sur mobile */}
          <button
            className="lg:hidden p-2 text-xl"
            onClick={() => setOpen(!open)}
          >
            <FiMenu />
          </button>
          <Logo />
        </div>

        {/* Menu horizontal (desktop) */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </ul>

        {/* Réseaux sociaux à droite */}
        <div className="flex space-x-3">
          <SocialIcon href="https://github.com">
            <FaGithub size={18} />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com">
            <FaLinkedin size={18} />
          </SocialIcon>
          <SocialIcon href="/CV.pdf" download>
            <span className="font-semibold text-sm">CV</span>
          </SocialIcon>
        </div>
      </nav>

      {/* Menu mobile affiché sous la navbar */}
      {open && (
        <div className="absolute mt-2 left-4 z-50 bg-[#0f172a] rounded-xl shadow-lg py-2 w-48 lg:hidden">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                {...item}
                onClick={() => setOpen(false)}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}