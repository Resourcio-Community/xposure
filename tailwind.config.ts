import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        background_black:"#0B0B0B",
        text_yellow:"#FFE39C",
        
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        Cinzel_Decorative: ["Cinzel Decorative", "serif"],
      },
      keyframes:{
        zoom:{
          '0%':{opacity:'1',scale:'1'},
          '100%':{opacity:'0',scale:'2.5'}
        }
      },
      animation:{
        'zoomin':"zoom 2s ease-in-out",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
