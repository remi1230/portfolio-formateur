'use client';

import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import NavItem from './NavItem';
import SocialIcon from './SocialIcon';
import Logo from './Logo';
import ThemeSwitch from '../ui-kit/ThemeSwitch';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { href: '#bio', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#skills', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-brand-navbar-bg bg-opacity-70">
      <nav className="navbar max-w-screen-xl mx-auto py-0.5">
        <div className="navbar-start">
          <div className="dropdown" ref={dropdownRef}>
            <input
              type="checkbox"
              id="mobile-menu-toggle"
              className="hidden"
              checked={isMenuOpen}
              readOnly
            />
            <label
              htmlFor="mobile-menu-toggle"
              tabIndex={0}
              role="button"
              className="lg:hidden"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </label>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-brand-bg rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
              {menuItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={handleNavItemClick}
                />
              ))}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {menuItems.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="hidden md:flex md:gap-2">
            <SocialIcon href="https://github.com/remi1230">
              <FaGithub size={18} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/r%C3%A9mi-tafforeau/">
              <FaLinkedin size={18} />
            </SocialIcon>
            <SocialIcon href="/assets/documents/CV-Rémi-Tafforeau.pdf" download>
              <span className="font-semibold text-sm">CV</span>
            </SocialIcon>
          </div>
          <ThemeSwitch className="p-4"/>
        </div>
      </nav>
    </header>
  );
}