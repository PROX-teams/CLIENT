import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/shared/styles/theme.css"; 
import { tx } from "@/shared/styles/textStyle.css";

export const tagBox = recipe({
  base: [
    tx.cap1_md,
    {
      backgroundColor: vars.color.gray_200,
      border: `0.06rem solid ${vars.color.stroke_300}`,
      padding: "0.28rem 0.625rem",
      width: "fit-content",
      minHeight: "1.625rem",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.2rem",
      borderRadius: "0.375rem",
    },
  ],
  variants: {
    hasRemove: {
      true: { paddingRight: "0.4rem" }, // 8px
      false: {},
    },
  },
  defaultVariants: {
    hasRemove: false,
  },
});

export const tagBoxWithRemove = style({
  paddingRight: "0.5rem", 
});

export const tagLabel = style({
  color: vars.color.white,
});

export const removeIcon = style({
  width: "1rem",
  height: "1rem",
  border: "none",
  background: "transparent",
  cursor: "pointer",
});

export const tagIcon = style({
  width: "1rem",
  height: "1rem",
});

export const tagCount = style({
  color: vars.color.gray_400,
});