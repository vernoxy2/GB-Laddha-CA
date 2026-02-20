/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        scroll: "scroll 15s linear infinite ",
        typing:
          "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },

      colors: {
        primaryStart: "#41C6E4",
        primaryEnd: "#65E0FB",
        textprimary: "#1D1D1D",
        textsecondary: "#666666",
      },

      backgroundImage: {
        primary: "linear-gradient(to right, #41C6E4, #65E0FB)",
      },

      fontFamily: {
        plusJakartaSans: ["'Plus Jakarta Sans'", "sans-serif"],
        dmSans: ["'DM Sans'", "sans-serif"],
      },
    },
  },

  plugins: [],
};
