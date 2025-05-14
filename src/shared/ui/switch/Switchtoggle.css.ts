import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const label = style({
  position: "relative",
  display: "inline-block",
  width: "48px",
  height: "24px",
});

export const input = style({
  opacity: 0,
  width: 0,
  height: 0,
  position: "absolute",
});

export const slider = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#EFF0F2",
  borderRadius: "1000px",
  transition: "all 0.4s ease-in-out",
  cursor: "pointer",

  selectors: {
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.primary,
    },
    [`${input}:checked + &::before`]: {
      transform: "translateX(24px)",
    },
  },

  "::before": {
    content: "",
    position: "absolute",
    top: "2px",
    left: "2px",
    width: "20px",
    height: "20px",
    border: `0.5px solid rgba(0,0,0,0.04)`,
    borderRadius: "50%",
    backgroundColor: vars.color.white,
    boxShadow: `
      0px 1px 6px rgba(0, 0, 0, 0.06),
      0px 2px 1px rgba(0, 0, 0, 0.04)
    `,
    transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
  },
});
