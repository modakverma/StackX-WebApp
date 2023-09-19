import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'bouncey': {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      
      animation:{
        'bouncey':'bouncey 1.8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
export default config
