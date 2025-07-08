import "../styles/globals.css";
import { Inter } from 'next/font/google';
import Navbar from "../components/menu/Navbar";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',         // bon pour le chargement rapide
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.className} transition-colors duration-300 bg-brand-bg text-brand-fg`}>
      <head />
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}