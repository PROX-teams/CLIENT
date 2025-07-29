// box.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css"; 
import { font } from "@/shared/styles/fonts.css"; 

export const tagbox = style({
  backgroundColor: vars.color.gray_200, 
  border: `1px solid ${vars.color.stroke_300}`, 
  padding: "4.5px 10px", 
  width: "fit-content", 
  height: "auto", 
  display: "inline-flex",          
  gap: "3px",
  alignItems: "center", 
  borderRadius: "4px", 
  color: vars.color.white,
  fontSize: font.size.b2,         
  fontWeight: font.weight.md, 
});