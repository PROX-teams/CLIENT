import { tx } from "@/shared/styles/textStyle.css";
import { lightTheme, vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style([
  {
    display: "flex",
    alignItems: "center",
    gap: 5,
    width: "fit-content",
    height: 24,
    padding: "3.5px 9px 3.5px 7px",
    color: vars.color.gray_500,

    ":hover": {
      color: vars.color.white,
    },

    selectors: {
      [`${lightTheme} &`]: {
        color: vars.color.gray_500,
      },
      [`${lightTheme} &:hover`]: {
        color: vars.color.black,
      },
      [`&[disabled]`]: {
        cursor: "not-allowed", // 커서 변경
        opacity: 0.6, // 시각적 비활성화 효과
      },
    },
  },
  tx.cap1_md,
]);

export const iconStyle = style({
  color: vars.color.gray_500,

  selectors: {
    [`${buttonStyle}:hover &`]: {
      color: vars.color.white,
    },
    [`${lightTheme}:hover &`]: {
      color: vars.color.black,
    },
  },
});
