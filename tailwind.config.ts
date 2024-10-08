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
      colors: {
        darkgreen: "#56784D",
        cream: "#e5d3c2",
        darkcream: "#f5ebdc",
        forestgreen: "#4a7c47",
        darkbrown : "#362001",
        badscore: "#e3eee2",
        mehscore: "#b0d1ae",
        alrightscore: "#7eb37a",
        goodscore: "#538c50",
        greatscore: "#345832",
        logogreen: "#72BF44",
        greenBlackTrees: "#011b09"
      },
    },
  },
  plugins: [],
}
export default config
