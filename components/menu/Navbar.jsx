// menu/Navbar.jsx
'use client';

import { useState, useRef, useEffect } from 'react'; // Ajout de useRef et useEffect
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import NavItem from './NavItem';
import SocialIcon from './SocialIcon';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Référence pour le conteneur du dropdown

  const menuItems = [
    { href: '/#about', label: 'À propos' },
    { href: '/#skills', 'label': 'Compétences' },
    { href: '/#projects', 'label': 'Projets' },
    { href: '/#contact', 'label': 'Contact' },
  ];

  // Gère la fermeture du menu si un clic est détecté à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si le dropdown est ouvert et que le clic n'est pas à l'intérieur du dropdown
      if (isMenuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Ferme le menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Dépend de isMenuOpen pour se ré-exécuter quand l'état change


  // Fonction pour gérer l'ouverture/fermeture du menu hamburger
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev); // Inverse l'état
  };

  // Fonction pour fermer le menu quand un NavItem est cliqué
  const handleNavItemClick = () => {
    setIsMenuOpen(false); // Ferme le menu
    // Optionnel : s'assurer que le focus quitte le bouton hamburger pour fermer le dropdown DaisyUI
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0f172a]/70">
      <nav className="navbar max-w-screen-xl mx-auto py-1 px-4">

        {/* Section gauche : Menu burger (mobile) + Logo/Nom */}
        <div className="navbar-start">
          {/* Composant Dropdown de DaisyUI */}
          <div className="dropdown" ref={dropdownRef}> {/* Ajout de la réf ici */}
            {/* Le checkbox est toujours là pour le mécanisme DaisyUI interne, mais on ne le rend pas visible ou interactif directement */}
            <input
              type="checkbox"
              id="mobile-menu-toggle"
              className="hidden" // Assurez-vous qu'il est toujours caché
              checked={isMenuOpen} // L'état React contrôle si le checkbox est "coché"
              readOnly // Rend le checkbox non modifiable directement par l'utilisateur
            />

            {/* Label/Bouton du menu burger */}
            <label
              htmlFor="mobile-menu-toggle" // Important pour l'accessibilité et la liaison avec le checkbox
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleMenuToggle} // Gère l'ouverture/fermeture et l'icône
            >
              {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </label>

            {/* Contenu du menu mobile : Affiché/masqué par DaisyUI grâce au 'checked' du checkbox */}
            {/* L'attribut 'open' est important pour DaisyUI avec le checkbox si vous ne voulez pas le gérer manuellement */}
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0f172a] rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
              {menuItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={handleNavItemClick} // Utilise la nouvelle fonction de fermeture
                />
              ))}
            </ul>
          </div>
          <Logo />
        </div>

        {/* Section centrale : Menu horizontal (desktop), masqué sur mobile */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {menuItems.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ))}
          </ul>
        </div>

        {/* Section droite : Réseaux sociaux */}
        <div className="navbar-end gap-2">
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
    </header>
  );
}