// components/Footer.jsx
import SocialIcon from '../menu/SocialIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-slate-800">
        <footer className="footer max-w-screen-xl mx-auto sm:footer-horizontal items-center py-10">
        <nav className="flex flex-col items-start gap-5">
            <div className="flex flex-row items-center gap-5 text-lg">
                <Image
                    src='/assets/images/logoSite.png'
                    alt="Logo Rémi Tafforeau"
                    width={32}
                    height={32}
                    className="object-contain"
                />
                <div>Rémi Tafforeau</div>
            </div>
            <div>&copy; {new Date().getFullYear()} Rémi Tafforeau. Tous droits réservés.</div>
        </nav>
        <nav>
            <div>Coordonnées</div>
            <div>Région Centre-Val de Loire</div>
            <div>Ville de Bourges</div>
        </nav>
        <nav className="flex flex-row items-center gap-2">
                <SocialIcon href="https://github.com">
                    <FaGithub size={18} />
                </SocialIcon>
                <SocialIcon href="https://linkedin.com">
                    <FaLinkedin size={18} />
                </SocialIcon>
                <SocialIcon href="/CV.pdf" download>
                    <span className="font-semibold text-sm">CV</span>
                </SocialIcon>
        </nav>
        </footer>
    </div>
  );
}
