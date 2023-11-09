import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      text: "var(--text)",
      background: "var(--background)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
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
          "99%": {
            borderColor: "black",
          },
        },
      },
      animation: {
        typing: "typing 4s steps(20) alternate 1, blink .7s 1",
        bounceShort: "pulse 3s ease-in 1",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#fffaeb",
            foreground: "#130e01",
            primary: {
              DEFAULT: "#ff8400",
              foreground: "#130e01",
            },
            secondary: {
              DEFAULT: "#fff5d6",
              foreground: "#130e01",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#140f00",
            foreground: "#fef9ec", // text color apparently
            primary: {
              DEFAULT: "#ff8400",
              foreground: "#fef9ec",
            },
            secondary: {
              DEFAULT: "#291f00",
              foreground: "#fef9ec",
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};

// @layer base {
//   :root {
//     --text: #130e01;
//     --background: #fffaeb;
//     --primary: #ff8400;
//     --secondary: #fff5d6;
//     --accent: #cf4307;
//   }
//   .dark {
//     --text: #fef9ec;
//     --background: #140f00;
//     --primary: #ff8400;
//     --secondary: #291f00;
//     --accent: #f86c30;
//   }
// }
export default config;
