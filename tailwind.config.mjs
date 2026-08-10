/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '380px', // Para pantallas muy pequeñas (<400px)
      },
      colors: {
        brand: {
          navy: '#0a1929',
          slate: '#1e293b',
          steel: '#475569',
          smoke: '#94a3b8',
          ivory: '#f8fafc',
          pearl: '#e2e8f0',
        },
        accent: {
          sun: '#f59e0b',
          rust: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}