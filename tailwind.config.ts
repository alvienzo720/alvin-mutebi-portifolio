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
        'neon-green': '#39FF14',
        'hot-pink': '#FF69B4',
        'electric-blue': '#00FFFF',
        'bright-yellow': '#FFFF00',
        'deep-purple': '#800080',
      },
      fontFamily: {
        'brutalist': ['Arial Black', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config