import "../styles/globals.css";
import { Inter as Inter } from 'next/font/google';
import Navbar from "../components/menu/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',         // bon pour le chargement rapide
});

// ✅ Métadonnées SEO globales
export const metadata = {
  title: {
    default: "Rémi Tafforeau | Développeur Full Stack Freelance",
    template: "%s | Rémi Tafforeau",
  },
  description:
    "Développeur web freelance spécialisé en React, Next.js et Symfony. Je conçois des applications modernes, performantes et accessibles.",
  keywords: [
    "développeur freelance",
    "Next.js",
    "React",
    "Symfony",
    "full stack",
    "portfolio",
    "développement web",
    "JavaScript",
    "France",
  ],
  authors: [{ name: "Rémi Tafforeau", url: "https://my1prod.com" }],
  creator: "Rémi Tafforeau",
  metadataBase: new URL("https://my1prod.com"),
  openGraph: {
    type: "website",
    url: "https://my1prod.com",
    title: "Rémi Tafforeau | Développeur Web Full Stack",
    description:
      "Développeur web freelance spécialisé en React, Next.js et Symfony.",
    siteName: "Rémi Tafforeau",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rémi Tafforeau - Développeur Web",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rémi Tafforeau | Développeur Full Stack",
    description:
      "Développement web moderne, rapide et sur mesure.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

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