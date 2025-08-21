import { tx } from "@/shared/styles/textStyle.css";
import { lightTheme, vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style(
  {
    display: "flex",
    alignItems: "center",
    padding: "0 10px 0 12px",
    gap: 4,
    width: "fit-content",
  },
  tx.cap1_md
);

export const iconWrapperStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const iconStyle = style({
  color: vars.color.white,

  selectors: {
    [`${lightTheme} &`]: {
      color: vars.color.black,
    },
  },
});
