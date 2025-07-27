import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";


export const trigger = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.53rem 1rem", // 8.5px 8px
  border: `0.1rem solid ${vars.color.stroke_200}`, // 1px
  borderRadius: "0.38rem", // 6px
  backgroundColor: vars.color.black,
  cursor: "pointer",
  minWidth: "10rem", // 160px
  color: vars.color.gray_500,
});

export const triggerSelected = style([
  trigger, // 기존 스타일을 상속
  {
    color: vars.color.white // 원하는 선택 시 색상으로 변경
    // 예시: vars.color.main 이나 원하는 색으로!
  },
]);


export const box = style({
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




export const labelVariants = styleVariants({
  default: {
    fontSize: "0.75rem",
    color: vars.color.gray_500,
  },
  selected: {
    fontSize: "0.75rem",
    color: vars.color.white,
  },
});