import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";

export const wrapper = style({
   display: "flex", 
   flexDirection: "column", 
   gap: "8px" 
  });

export const label = style([
  tx.cap1_rg, 
  { 
    color: vars.color.gray_500
  }
]);

export const errorMessage = style([
  tx.cap1_rg, 
  {
    color: vars.color.system_red,                
  },
]);

const baseField = style([
  tx.b1_rg,
  {
  width: "100%",                    
  borderRadius: "6px",
  border: `1px solid ${vars.color.stroke_200}`,
  backgroundColor: vars.color.gray_100,
  color: vars.color.white,
  transition: "border-color 0.2s ease",
  selectors: {
    "&::placeholder": { color: vars.color.gray_400 },
    "&:focus": { outline: "none", borderColor: vars.color.stroke_typing },
  },
}]);

export const inputRecipe = recipe({
  base: [baseField],
  variants: {
    size: {
      sm: { width: 450, minHeight: 34, padding: "8.5px 12px" },
      md: { width: 452, minHeight: 44, padding: "11px 12px" },
      lg: { width: 648, minHeight: 36, padding: "7px 12px" },
    },
  },
  defaultVariants: { size: "md" },
});


export const textareaRecipe = recipe({
  base: [
    baseField,
    { 
    resize: "none",
    overflow: "auto", 
    selectors: {
    "&::-webkit-scrollbar": { display: "none" }, 
  },
    }
  ],
  variants: {
    size: {
      sm: { width: 340, minHeight: 32, padding: "5.5px 12px" },
      md: { width: 450, minHeight: 86, padding: "10px 12px" },
      lg: { width: 648, minHeight: 86, padding: "10px 12px" },
    },
  },
  defaultVariants: { size: "md"},
});
