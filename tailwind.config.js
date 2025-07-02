/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        // Paleta de colores personalizada
        primary: {
          50: '#FFF3E0',   // Beige claro
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#F57C00',  // Naranja cálido (color principal)
          600: '#EF6C00',
          700: '#E65100',
          800: '#FF8F00',
          900: '#E65100',
          DEFAULT: '#F57C00',
        },
        secondary: {
          50: '#FDF8F3',
          100: '#FAF0E6',
          200: '#F5E1CC',
          300: '#E6A57E',  // Terracota suave
          400: '#D4946A',
          500: '#C2855A',
          600: '#B0764A',
          700: '#9E673A',
          800: '#8C582A',
          900: '#7A491A',
          DEFAULT: '#E6A57E',
        },
        accent: {
          50: '#F2F4F0',
          100: '#E6E9E1',
          200: '#CCD3C3',
          300: '#B3BDA5',
          400: '#99A787',
          500: '#8D9C74',  // Verde oliva suave
          600: '#7A8B61',
          700: '#677A4E',
          800: '#54693B',
          900: '#415828',
          DEFAULT: '#8D9C74',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F3F3F3',
          200: '#E8E8E8',
          300: '#D1D1D1',
          400: '#B4B4B4',
          500: '#8A8A8A',
          600: '#636363',
          700: '#4E4E4E',  // Gris oscuro cálido
          800: '#3A3A3A',
          900: '#262626',
          DEFAULT: '#4E4E4E',
        },
        background: {
          light: '#FFF3E0',  // Beige claro para fondos
          soft: '#FDF8F3',   // Beige muy claro
          warm: '#E6A57E',   // Terracota suave
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "landing-warm": {
          "primary": "#F57C00",
          "primary-focus": "#E65100",
          "primary-content": "#ffffff",
          "secondary": "#E6A57E",
          "secondary-focus": "#D4946A",
          "secondary-content": "#ffffff",
          "accent": "#8D9C74",
          "accent-focus": "#7A8B61",
          "accent-content": "#ffffff",
          "neutral": "#4E4E4E",
          "neutral-focus": "#3A3A3A",
          "neutral-content": "#ffffff",
          "base-100": "#FFF3E0",
          "base-200": "#FDF8F3",
          "base-300": "#FAF0E6",
          "base-content": "#4E4E4E",
          "info": "#8D9C74",
          "success": "#8D9C74",
          "warning": "#F57C00",
          "error": "#E65100",
        },
      },
    ],
  },
}

