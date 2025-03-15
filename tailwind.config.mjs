/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
    
        pixel: ["pixel", "sans-serif"],
 
        heading: ["heading__regular", "sans-serif"],
        headingSemiBold: ["heading__semibold", "sans-serif"],
     
      },
      colors: {
  
        bg: "#DDDDDD",
        text: "#1E1E1E",
  
         accent: "#F50A1C",
      
        
      },

      screens: {
        laptop: { max: "1150px" },
        tablet: { max: "950px" },
        mobile: { max: "640px" },
      },
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
