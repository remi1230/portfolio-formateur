/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // Classes pour les bordures
    'border-4',
    'border-slate-500',
    // Classe pour les numéros de ligne de Prism.js
    'line-numbers',
    // Si vous avez des variantes (ex: dark:border-slate-500), ajoutez-les aussi
    // 'dark:border-slate-500',
    // Si vous avez des classes de bordure spécifiques à des côtés
    // 'border-t-4', 'border-b-4', 'border-l-4', 'border-r-4',
    // 'border-t-slate-500', etc.
  ],
  theme: {
    fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
    },
    extend: {
    },
  },
  plugins: [],
}
