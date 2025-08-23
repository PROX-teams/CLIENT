import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";

// 박스 자체에 대한 
export const wrapper = style({
  position: "relative",
  
})
export const trigger = recipe({
  base: [
    tx.cap1_md, 
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.53rem 0.75rem",
      borderRadius: "0.38rem",
      backgroundColor: vars.color.black,
      cursor: "pointer",
      width: "100%",
      color: vars.color.gray_500,
    }
  ],
  variants: {
    // a1(12/6), a2(8/6), a3(8/12)을 density로 흡수
    layout: {
      rightLg: { paddingLeft: "12px", paddingRight: "6px" },  // a1
      rightSm: { paddingLeft: "8px",  paddingRight: "6px" },  // a2
      left:    { paddingLeft: "8px",  paddingRight: "12px" }, // a3
      flush:   { paddingLeft: "0px",  paddingRight: "0px" },  // a4
    },

    // width 프리셋: a1/a2의 450/332/232 대응
    width: {
      auto: { width: "auto" },
      w232: { width: "232px" },
      w332: { width: "332px" },
      w450: { width: "450px" },
      full: { width: "100%" },
    },

    // a4(투명 박스) 대응 + 기본 솔리드/아웃라인 토큰화
    appearance: {
      solid: {
        backgroundColor: vars.color.black,
        border: `1px solid ${vars.color.stroke_200}`,
      },
      ghost: {
        backgroundColor: "transparent",
        border: "none",             
      },
    },
    defaultVariants: {
      layout: "a2",
      width: "auto",
      appearance: "solid",
  },
  },
});

export const value = recipe({
  base: {
    color: vars.color.gray_500,
  },
  variants: {
    selected: {
      true: {
        color: vars.color.white,
      },
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});



export const menu = recipe({
  base:{
  marginTop: "0.4rem", 
  border: `0.1rem solid ${vars.color.stroke_200}`,
  borderRadius: "0.38rem",
  padding: "0.2rem 0.2rem", 
  backgroundColor: vars.color.gray_200,
  maxHeight: "12.50rem",
  overflowY: "auto",
  zIndex: 1000,
  position: "absolute",
  minWidth: "10rem",
  },
  variants: {
    placement: {
      left: {
        left: 0,
      },
      center: {
        left: "50%",
        transform: "translateX(-50%)" ,
      },
      right: {
        right: 0,
      },
    },
  }
});

export const option = style({
  alignItems: "center",
  padding: "0.34rem 1rem",
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

