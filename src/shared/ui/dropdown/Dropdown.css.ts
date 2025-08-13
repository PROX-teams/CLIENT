import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";

// 박스 자체에 대한 
export const trigger = recipe({
  base: [
    tx.cap1_md, // 공통 텍스트 스타일 유지
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.53rem 0.75rem",
      borderRadius: "0.38rem", // 6px
      backgroundColor: vars.color.black,
      cursor: "pointer",
      width: "100%",
      color: vars.color.gray_500,
    }
  ],
  variants: {
    size: {
      xs: { // 16px 높이, 보더 없음
        height: "1rem",
        border: "none",
      },
      sm: { // 26px
        height: "1.625rem",
        border: `0.0625rem solid ${vars.color.stroke_200}`,
      },
      md: { // 34px
        height: "2.125rem",
        border: `0.0625rem solid ${vars.color.stroke_200}`,
      },
      lg: { // 56px
        height: "3.5rem",
        border: `0.0625rem solid ${vars.color.stroke_200}`,
      },
    },
  },
  defaultVariants: { size: "md" },
});

export const SelectedValue = style({
  color: vars.color.white,
  marginRight: "auto",
})

export const menu = style({
  marginTop: "0.40rem", // 8px
  border: `0.1rem solid ${vars.color.stroke_200}`,
  borderRadius: "0.38rem",
  padding: "0.2rem 0.2rem", // 0.4px → 0.03rem
  backgroundColor: vars.color.gray_200,
  maxHeight: "12.50rem", // 200px
  overflowY: "auto",
  zIndex: 1000,
  position: "absolute",
  minWidth: "10rem",
});

export const option = style({
  alignItems: "center",
  padding: "0.34rem 1rem",// 16px 5.5px
  cursor: "pointer",
  color: vars.color.gray_500,
  fontSize: "0.75rem",
});

export const optionSelected = style({
  display: "flex",
  alignItems: "center",
  padding: "0.34rem 1rem",
  borderRadius: "0.19rem", // 3px
  backgroundColor: vars.color.gray_300,
  color: vars.color.white,
  fontSize: "0.75rem",
});


export const Icon = style({



})