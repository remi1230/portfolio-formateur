/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0f172a',
        'brand-fg': '#CBD5E1',
        'brand-hover': 'rgba(255,255,255,0.06)',
        'brand-important': 'hsl(140, 53.80%, 56.70%)',
      }
    },
  },
  plugins: [require("daisyui")],
}