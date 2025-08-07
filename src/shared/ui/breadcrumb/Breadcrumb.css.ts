import { vars } from "@/shared/styles/theme.css";
import { tx } from "@/shared/styles/textStyle.css";
import { style } from '@vanilla-extract/css';

// 배경 투명으로 하고싶으면?
export const breadcrumbStyle = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
});

/**
 * 가로 정렬
 *
 * 아이템끼리의 거리는 2px
 */
export const breadcrumbListStyle = style([
  tx.cap1_rg,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    margin: 0,
    padding: 0,
  },
]);

/**
 * 패딩 위아래 4.5px
 * 좌우 8px
 */
export const breadcrumbItemStyle = style([
    tx.cap1_rg, 
    {
        display: 'flex',
        alignItems: 'center',
        color: vars.color.gray_400
    },
]);


export const breadcrumbSeparatorStyle = style({
  display: 'flex',
  alignItems: 'center',
});


export const breadcrumbItemInactiveStyle = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: vars.color.gray_700,
});