import "../styles/globals.css";
import { Inter as Inter } from 'next/font/google';
import Navbar from "../components/menu/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',         // bon pour le chargement rapide
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.className} scroll-smooth transition-colors duration-300 bg-brand-bg text-brand-fg`}>
      <head />
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}