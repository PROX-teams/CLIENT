import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";

export const searchWrapper = style({
  display: "inline-flex",
  alignItems: "center",
  width: "300px",
  padding: "4.5px 8px",  
  gap:"4px",                  
  borderRadius: "6px",
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

// (신규) 서치 인풋 전용: 인풋을 투명/보더 없음으로
export const inputBare = style([tx.cap1_rg,{
  flex: "1 1 auto",
  width: "100%",
  border: "none",
  background: "transparent",
  color: vars.color.white,
  selectors: {
    "&::placeholder": { color: vars.color.gray_400 },
    "&:focus": { outline: "none" },
    "&:disabled": { cursor: "not-allowed" },
    '&::-webkit-search-decoration': { display: "none" },
    '&::-webkit-search-cancel-button': { display: "none" },
  },

}]);


export const searchinputRecipe = recipe({
  base: [inputBare],
  variants: {
    size: {
      sm: { height: 36, padding: "7px 12px" },
      md: { height: 44, padding: "11px 12px" },
    },
  },

  defaultVariants: { size: "md" },
});

export const iconBox = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto",
  // 클릭 시 인풋 포커스 주고 싶으면 pointerEvents 기본 유지
  // 단순 장식이라면 pointerEvents: "none" 권장
});