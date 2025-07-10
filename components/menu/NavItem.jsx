// menu/NavItem.jsx
import Link from "next/link";

export default function NavItem({ href, label, onClick }) {
  return (
    <li>
      {/* 'btn btn-ghost' pour un style de bouton léger, 'btn-sm' pour une petite taille, 'rounded-btn' pour des coins arrondis */}
      {/* Les classes 'hover:bg-white/10' peuvent être redondantes ou remplacées par le style de DaisyUI,
          mais je les laisse pour l'instant si vous voulez conserver un effet personnalisé.
          DaisyUI a ses propres hover states par défaut pour les items de menu. */}
      <Link
        href={href}
        onClick={onClick}
        className="btn btn-ghost btn-sm px-4 py-6 rounded-xl text-sm font-medium hover:bg-white/10" // Adjusted for DaisyUI button style
      >
        {label}
      </Link>
    </li>
  );
}