/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      screens: {
        mobile: "1px",
        mobileL: "374px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        vlg: "1200px",
        xl: "1440px",
        mega: "1921px",
      },
      colors: {
        "white":         "#FFFFFF",
        "light-gray":    "#C6C6C6",
        "fuschia":       "#F41249",
        "light-fuschia": "#F03C67",
        "black":         "#121214",
        "teal":           "#18939B",
        "dark-gray":     "#1E1E1E",
        "gray":          "#3F3F3F",
        "off-white":     "#D9D9D9",
        "purple":        "#382767",
        "yellow":        "#DFA100",
        "cyan":          "#0FFFE2",
      },
      fontFamily: {
        sans: ["Aeonik", "Helvetica", "Arial", "sans-serif"],
        serif: [ "Mondwest", "Times New Roman", "sans-serif"],
        unbounded: ["Unbounded", "Helvetica", "Arial", "fantasy"],
        nova: ["NovaFlat Regular", "Helvetica", "Arial", "sans-serif"],
        pixel: ["Yamaha EBM7 Regular", "YAMAHA EBM7 BOLD", "Verdana", "Impact", "fantasy"],
        pixbold: ["YAMAHA EBM7 BOLD", "Verdana", "Impact", "fantasy"],
        outline: ["Outline", "Verdana", "Impact", "fantasy"],
      },
      extend: {
      },
  },
  plugins: [],
};
