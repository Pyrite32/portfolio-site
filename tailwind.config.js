/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        overviewTextBp: "1790px",
        mega: "1921px",
      },
      colors: {
        "white":         "#FFFFFF",
        "light-gray":    "#C6C6C6",
        "fuschia":       "#F41249",
        "light-fuschia": "#F03C67",
        "black":         "#121214",
        "dark-gray":     "#1E1E1E",
        "gray":          "#3F3F3F",
        "off-white":     "#D9D9D9",
        "purple":        "#382767",
        "yellow":        "#DFA100",
        "cyan":          "#0FFFE2",
      },
      fontFamily: {
        sans: ["Aeonik", "sans-serif"],
        serif: ["Mondwest", "Times New Roman", "sans-serif"],
        unbounded: ["Unbounded", "Arial", "fantasy"],
        nova: ["NovaFlat Regular", "Arial", "sans-serif"],
      },
      extend: {
      },
  },
  plugins: [],
};
