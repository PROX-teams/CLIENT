import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";

export const wrapper = style({ display: "flex", flexDirection: "column", gap: "8px" });

export const label = style([tx.cap1_rg, { color: vars.color.gray_600, fontSize: "14px", fontWeight: 500 }]);

const baseField = style({
  width: "100%",                    
  borderRadius: "4px",
  border: `1px solid ${vars.color.stroke_300}`,
  backgroundColor: vars.color.gray_200,
  color: vars.color.white,
  transition: "border-color 0.2s ease",
  selectors: {
    "&::placeholder": { color: vars.color.gray_400 },
    "&:focus": { outline: "none", borderColor: vars.color.stroke_typing },
    "&:disabled": { backgroundColor: vars.color.gray_200, cursor: "not-allowed" },
  },
});

export const inputRecipe = recipe({
  base: [baseField],
  variants: {
    size: {
      sm: { height: 36, padding: "7px 12px" },
      md: { height: 44, padding: "11px 12px" },
    },
    state: {
      default: {},
      invalid: { borderColor: vars.color.stroke_typing },
    },
  },

  defaultVariants: { size: "md", state: "default" },
});


export const textareaRecipe = recipe({
  base: [baseField, { resize: "none" }],
  variants: {
    size: {
      sm: { minHeight: 32, padding: "5.5px 12px" },
      md: { minHeight: 86, padding: "10px 12px" },
    },
    state: {
      default: {},
      invalid: { borderColor: vars.color.stroke_typing },
    },
  },
  defaultVariants: { size: "md"},
});

