import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primaryBg: "#fff",
      secondaryBg: "#F6F6F6",
      primaryCta: "#000",
      border: "#EDEDED",
      active: "#2161DC",
      success: "#008000",
      failed: "#C52828",
      darkFont: "#000",
      ctaText: "#fff",
      purple: "#A58FAA",
      blue: "#A6D6D6",
      green: "#D5ECC2",
      salmon: "#FCD1D1",
      grey: "#687980",
      tertiaryBg: "#F8F9F6",
      secondaryFont: "#CDCDCD",
      skeleton: "#e9e9e9",
    },
    screens: {
      'xs': "300px",
      'sm': '640px',
      '2sm': '700px',
      'md': '768px',
      'nm': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      "sm": "5px",
      "md": "10px",
      "rnd": "50%"
    }
  },
  plugins: [],
}
export default config
