/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
        '2xl': '1536px', // 2X extra-large screens
      },
      colors: {
        "brand-darkblue": "hsl(233, 52%, 40%)",
        "brand-darkblue-light": "hsl(233, 52%, 60%)",

      },
    },
    plugins: [],
  }
}
