import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const base = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "38px",
  borderRadius: "7px",
});

export const variantStyle = styleVariants({
  filled: {
    fontSize: "14px",
    fontWeight: 600,
    color: vars.color.white,
    backgroundColor: vars.color.black,
  },
  outlined: {
    border: `1px solid ${vars.color.stroke_200}`,
    color: vars.color.gray_700,
    backgroundColor: vars.color.white,
  },
});

export const buttonSizeStyle = styleVariants({
  small: { padding: "0 16px", fontSize: "14px", fontWeight: 400 },
  medium: { padding: "0 18px", fontSize: "14px", fontWeight: 600 },
  large: {
    width: "128px",
    fontSize: "15px",
    fontWeight: 600,
  },
});

export const dangerStyle = style({
  color: "#D93A32",
});

export const actionButtonStyle = recipe({
  base,
  variants: {
    variant: {
      filled: variantStyle.filled,
      outlined: variantStyle.outlined,
    },
    size: {
      small: buttonSizeStyle.small,
      medium: buttonSizeStyle.medium,
      large: buttonSizeStyle.large,
    },
    danger: {
      true: dangerStyle,
      false: "",
    },
  },
});
