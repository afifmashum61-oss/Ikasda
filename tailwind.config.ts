import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        edoo: {
          DEFAULT: '#10b981',
          primary: '#059669',
          dark: '#047857',
          deep: '#064e3b',
          light: '#34d399',
          soft: '#d1fae5',
          mint: '#e6f7f2',
        },
        brand: {
          orange: '#e67e22',
          'orange-hover': '#d35400',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
        badge: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};

export default config;