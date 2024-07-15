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
          "prizebg":"url(/assets/prizebg.svg)"
      },
      colors:{
        background_black:"#0B0B0B",
        text_yellow:"#FFE39C",
        
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        Cinzel_Decorative: ["Cinzel Decorative", "serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
