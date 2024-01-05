import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // THEME
    extend: {
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

      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.3rem',
          md: '1.875rem',
          xl: '4rem',
        },
      },

      // COLORS
      colors: {
        'color-main': '#000000',
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
      fontSize: {
        mainTitle: [
          '32px',
          { fontWeight: '700', lineHeight: '38.4px', letterSpacing: '-0.32px' },
        ],
        mainTitleTb: [
          '48px',
          { fontWeight: '700', lineHeight: '57.6px', letterSpacing: '-0.48px' },
        ],
        mainTitleDt: [
          '66px',
          { fontWeight: '700', lineHeight: '79.2px', letterSpacing: '-0.66px' },
        ],
        title: [
          '36px',
          { fontWeight: '700', lineHeight: '39.6px', letterSpacing: '-0.36px' },
        ],
        titleTb: [
          '48px',
          { fontWeight: '700', lineHeight: '52.8px', letterSpacing: '-0.48px' },
        ],
        titleDt: [
          '56px',
          { fontWeight: '700', lineHeight: '61.6px', letterSpacing: '-0.56px' },
        ],
        menuItem: [
          '24px',
          { fontWeight: '500', lineHeight: '1.5', letterSpacing: '-0.24px' },
        ],
        menuItemTb: [
          '36px',
          { fontWeight: '500', lineHeight: '1.5', letterSpacing: '-0.36px' },
        ],
        menuSubitem: [
          '16px',
          { fontWeight: '500', lineHeight: '1.5', letterSpacing: '-0.16px' },
        ],
        menuSubitemTb: [
          '24px',
          { fontWeight: '500', lineHeight: '1.5', letterSpacing: '-0.24px' },
        ],
        cardTitle: [
          '24px',
          { fontWeight: '700', lineHeight: '28.8px', letterSpacing: '-0.24px' },
        ],
        cardTitleTb: [
          '40px',
          { fontWeight: '700', lineHeight: '48px', letterSpacing: '-0.4px' },
        ],
        cardDesc: [
          '16px',
          { fontWeight: '500', lineHeight: '23.2px', letterSpacing: '-0.16px' },
        ],
        cardDescTb: [
          '20px',
          { fontWeight: '500', lineHeight: '29px', letterSpacing: '-0.2px' },
        ],
        button: [
          '28px',
          { fontWeight: '700', lineHeight: '1.5', letterSpacing: '-0.28px' },
        ],
        buttonTb: [
          '40px',
          { fontWeight: '700', lineHeight: '1.5', letterSpacing: '-0.4px' },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
