import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";
import { style } from '@vanilla-extract/css';

export const breadcrumbStyle = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  
});

export const breadcrumbListStyle = style([
  tx.cap1_rg,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
    padding: 0,
  },
]);

export const breadcrumbItemStyle = style([
    tx.cap1_rg, 
    {
        display: 'flex',
        alignItems: 'center',
        color: vars.color.gray_400
    },
]);

export const breadcrumbItemInactiveStyle = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: vars.color.gray_700,
});


export const breadcrumbSeparatorStyle = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color.stroke_400
});

