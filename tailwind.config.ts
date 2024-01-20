import type { Config } from 'tailwindcss'

// font-normal == 400
// font-medium == 500
// font-semibold == 600
// font-bold == 700
// font-extrabold == 800

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      // 'sans': ['Eurostile', 'ui-sans-serif', 'system-ui'],
      'orbitron': ['Orbitron', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
