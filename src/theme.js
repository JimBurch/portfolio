import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      "html, body": {
        height: "100%",
        background: "atom.midnight",
        color: "atom.mono1",
        fontFamily: "Fira Mono",
        lineHeight: "1.4",
      },
      html: {
        overflowY: "overlay",
      },
      body: {
        margin: 0,
      },
      a: {
        color: "atom.cyan",
      },
      code: {
        backgroundColor: "atom.white",
        color: "atom.midnight",
        fontSize: "sm",
        padding: "0.2em",
        borderRadius: "sm",
      },
    },
  },
  fonts: {
    heading: "Fira Mono",
    text: "Fira Mono",
  },
  colors: {
    brand: {
      100: "#E0AAFF",
      200: "#C77DFF",
      300: "#9D4EDD",
      400: "#7B2CBF",
      500: "#5A189A",
      600: "#3C096C",
      700: "#240046",
      800: "#10002B",
      900: "#070014",
    },
    atom: {
      black: "#000000",
      white: "#EDF2F7",
      midnight: "#282c34",
      highlight: "#2b303b",
      mono1: "#abb2bf",
      mono2: "#828997",
      mono3: "#5c6370",
      cyan: "#56b6c2",
      blue: "#61afef",
      purple: "#c678dd",
      green: "#98c379",
      red1: "#e06c75",
      red2: "#be5046",
      orange1: "#d19a66",
      orange2: "#e5c07b",
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
});
