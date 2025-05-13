import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily:
    "Pretendard, -apple-system,BlinkMacSystemFont, system-ui, sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("html", {
  fontFamily:
    "Pretendard, -apple-system,BlinkMacSystemFont, system-ui, sans-serif",
  fontSize: "16px",
});

globalStyle("body", {
  lineHeight: 1.5,
  fontFamily:
    "Pretendard, -apple-system,BlinkMacSystemFont, system-ui, sans-serif",
  backgroundColor: "#fff",
  color: "#000",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("a, button", {
  cursor: "pointer",
});

globalStyle("ul, ol", {
  listStyle: "none",
  padding: 0,
});

globalStyle("button, input, select, textarea", {
  background: "transparent",
  border: "none",
});
