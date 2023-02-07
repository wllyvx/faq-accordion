/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // #### Gradient
        'grad1': 'hsl(273, 75%, 66%)',
        'grad2': 'hsl(240, 73%, 65%)',
        // ### Text Primary
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        // #### Text Neutral
        'very-dark': 'hsl(237, 12%, 33%)',
        'dark': 'hsl(240, 6%, 50%)',
        // #### Dividers
        'divider': 'hsl(240, 5%, 91%)'
      },
      backgroundImage: {
        'mobile-pattern': "url('/img/bg-pattern-mobile.svg')"
      }
    },
  },
  plugins: [],
}
