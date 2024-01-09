import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      // COLORS
      colors: {
        'color-main': '#000000',
        'color-primary': '#222222',
        'color-text': {
          primary: '#474747',
          extra: '#565148',
        },
        'color-accent': {
          primary: '#EA80B3',
          extra: '#EAB27F',
        },
        'color-bg': {
          primary: '#FFEFF0',
          extra: '#FEF5EC',
        },
      },
      // FONTS
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};

export default config;
