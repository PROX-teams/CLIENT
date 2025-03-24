import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    white: null,
    gray_50: null,
    gray_100: null,
    gray_200: null,
    gray_300: null,
    gray_400: null,
    gray_500: null,
    gray_600: null,
    gray_700: null,
    black: null,
    stroke_100: null,
    stroke_200: null,
    stroke_300: null,
    dimmed_100: null,
    dimmed_200: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    primary: "#2563EB",
    secondary: "#F7F7F2",
    white: "#FFFFFF",
    gray_50: "rgba(49, 54, 57, 0.04)",
    gray_100: "#EFEFEF",
    gray_200: "#BBBBBB",
    gray_300: "#999999",
    gray_400: "#888888",
    gray_500: "#767676",
    gray_600: "#505050",
    gray_700: "#303030",
    black: "#111111",
    stroke_100: "rgba(0,0,0,0.08)",
    stroke_200: "rgba(0,0,0,0.12)",
    stroke_300: "rgba(0,0,0,0.24)",
    dimmed_100: "rgba(0,0,0,0.24)",
    dimmed_200: "rgba(0,0,0,0.4)",
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    primary: "#2563EB",
    secondary: "#F7F7F2",
    white: "#FFFFFF",
    gray_50: "rgba(49, 54, 57, 0.04)",
    gray_100: "#EFEFEF",
    gray_200: "#BBBBBB",
    gray_300: "#999999",
    gray_400: "#888888",
    gray_500: "#767676",
    gray_600: "#505050",
    gray_700: "#303030",
    black: "#111111",
    stroke_100: "rgba(0,0,0,0.08)",
    stroke_200: "rgba(0,0,0,0.12)",
    stroke_300: "rgba(0,0,0,0.24)",
    dimmed_100: "rgba(0,0,0,0.24)",
    dimmed_200: "rgba(0,0,0,0.4)",
  },
});
