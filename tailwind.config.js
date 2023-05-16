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
        "brand-darkblue": "hsl(231, 56%, 40%)",
        "brand-darkblue-light": "hsl(231, 56%, 60%)",
        black: "rgba(21, 31, 78, 1)",
        gray: {
          '700': "rgba(131, 138, 169, 1)",
        }
      },
      textColor: {
        'dark': 'black',
      },
      variants: {
        extend: {
          textColor: ['focus'],
        },
      },

    },
    plugins: [],
  }
}
