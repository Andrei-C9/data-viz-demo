import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'next-black': '#000',
        'next-white': '#fff',
        'next-gray': {
          50: '#fafafa',
          100: '#eaeaea',
          200: '#999999',
          300: '#888888',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#222222',
          800: '#111111',
        },
        'next-purple': '#7928ca',
        'next-blue': '#0070f3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;