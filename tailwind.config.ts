import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gradientPink: {
          100: "#f53d90"
        },
        gradientPurple: {
          100: "#8b3cfd"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        mainFont: ["Poppins", "sans-serif"],
        nameFont: ["Satisfy", "cursive"]
      },
      screens: {
        'max-xs': '320px',
        'xs': '370px',
        'sm': '420px',
        'md': '765px',
        'lg': '1020px',
        'xl': '1280px',
        '2xl': '1440px',
        'max-xl': '2560px'
      },
      fontSize: {
        'xl': '16px',
        '1.5xl': '21px',
        '2.5xl': '29px'
      },
      height:{
        'h-90': '90vh'
      },
      gridTemplateRows: {
        'skill-rows': 'repeat(14, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
export default config
