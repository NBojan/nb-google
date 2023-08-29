import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '420px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
export default config
