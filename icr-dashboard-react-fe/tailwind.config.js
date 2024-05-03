module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "inter-medium": ["Inter-medium", "sans-serif"],
        "inter-bold": ["Inter-bold", "sans-serif"],
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        lightBlack: "var(--lightBlack)",
        offWhite: "var(--offWhite)",
        lightGrey: "var(--lightGrey)",
        neutralBlue: "var(--neutralBlue)",
        grey: "var(--grey)",
        grey1: "var(--grey1)",
        grey2: "var(--grey2)",
        darkBlue: "var(--darkBlue)",
        orange: "var(--orange)",
        orange1: "var(--orange1)",
        lightGreen: "var(--lightGreen)",
        green1: "var(--green1)",
        lightRed: "var(--lightRed)",
        deepRed: "var(--deepRed)",
        steelBlue: "var(--steelBlue)",
        barchart: "var(--barchart)",

        progressBlue: "var(--progressBlue)",
        orange2: "rgba(252, 222, 192, 1)",
        orange3: "rgba(255, 232, 209, 1)",
        orange4: "rgba(255, 212, 168, 1)",
      },
    },
  },
  variants: {},
  plugins: [],
};
