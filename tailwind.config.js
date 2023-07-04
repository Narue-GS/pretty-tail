/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'sm': '0 0 50px 50px rgba(255)',
      },
      letterSpacing: {
        'normal': '0em',
        'decorative': '0.8em'
      },
      theme: {
        'dark' : 'bg-blue-900 text-white'
      },
      minHeight: {
        full: "90vh"
      }
    },
  },
  plugins: [],
}
