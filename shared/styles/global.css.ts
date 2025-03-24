import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("body", {
  lineHeight: 1.5,
  fontFamily: "system-ui, sans-serif",
  backgroundColor: "#fff",
  color: "#000",
});

globalStyle("ul, ol", {
  listStyle: "none",
  padding: 0,
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("button", {
  background: "none",
  border: "none",
  padding: 0,
  font: "inherit",
  color: "inherit",
  cursor: "pointer",
});
