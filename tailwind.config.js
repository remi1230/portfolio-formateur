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
        'brand-bg': 'oklch(21% 0.04 265)',
        'brand-fg': 'oklch(93% 0.01 255)',
        'brand-hover': 'rgba(255,255,255,0.06)',
        'brand-important': 'oklch(79% 0.19 155)',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
}