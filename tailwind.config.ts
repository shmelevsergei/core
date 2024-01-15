import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {

    extend: {
      backgroundImage: {

      },

      boxShadow: {
        base: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        "inter": ["var(--font-inter)"]
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}
export default config
