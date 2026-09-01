/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#fcfbf9',
          surface1: '#ffffff',
          surface2: '#f5f3ef',
          elevated: '#ebe8e2',
        },
        text: {
          primary: '#1c1917',
          secondary: '#57534e',
          tertiary: '#78716c',
        },
        accent: {
          primary: '#4f46e5',
          hover: '#4338ca',
          glow: 'rgba(79, 70, 229, 0.1)',
        },
        border: {
          subtle: 'rgba(0, 0, 0, 0.08)',
          medium: 'rgba(0, 0, 0, 0.15)',
          accent: 'rgba(79, 70, 229, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
