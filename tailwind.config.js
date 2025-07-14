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
        'brand-bg': 'var(--brand-bg)',
        'brand-fg': 'var(--brand-fg)',
        'brand-important': 'var(--brand-important)',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
}