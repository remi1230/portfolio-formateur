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
        'brand-footer': 'var(--brand-footer)',
        'brand-fo': 'var(--brand-fo)',
      },
      backgroundImage: {
        'gdt-company-brand': 'linear-gradient(to bottom right, var(--gd-cpn-from), var(--gd-cpn-via), var(--gd-cpn-to))',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
}
