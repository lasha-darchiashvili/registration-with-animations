/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grayZ: "rgba(234, 234, 234, 1)",
      black: "rgba(35, 35, 35, 1)",
      transparent: "transparent",
      red: "rgba(241, 85, 36, 1)",
      blacker: "#000000",
      yellow: "rgba(214, 209, 110, 1)",
      reddish: "rgba(221, 57, 57, 1)",
      blueZ: "rgba(18, 137, 174, 1)",
      white: "rgba(255, 255, 255, 1)",
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },

      animation: {
        Rlogo: "Rlogo 1s ease-in",
        RHeader: "RHeader 1s 1s",
        RedToYellow: "RedToYellow 1s ease-in forwards",
      },
      keyframes: {
        RedToYellow: {
          "0%": {
            width: "0",
            height: "0",
          },

          "100%": {
            width: "62.2rem",
            height: "7.5rem",
            "background-color": "rgba(214, 209, 110, 1)",
            transform: "translate(31rem, -2.5rem)",
          },
          // w-[62.2rem] h-[7.5rem] absolute bg-yellow top-[17rem] -left-[76rem]"
        },
        Rlogo: {
          "0%": {
            transform: "scale(30)",
            visibility: "visible",
          },

          "100%": {
            transform: "scale(1)",
            visibility: "visible",
          },
        },
        RHeader: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
