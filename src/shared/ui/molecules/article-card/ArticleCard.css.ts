import { tx } from "@/shared/styles/textStyle.css";
import { darkTheme, lightTheme, vars } from "@/shared/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const base = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.color.gray_100,
  border: `1px solid ${vars.color.stroke_200}`,
  borderRadius: 6,
  transition: "all 0.4s ease",

  ":hover": {
    backgroundColor: vars.color.gray_200,
    border: `1px solid ${vars.color.stroke_300}`,
  },

  selectors: {
    [`${lightTheme} &`]: {
      backgroundColor: vars.color.gray_100,
    },
  },
});

export const hoverContainer = style({});
export const container = recipe({
  base,

  variants: {
    variant: {
      large: {
        flexDirection: "column",
        width: 305,
        height: 304,
      },
      small: {
        flexDirection: "column",
        width: 202,
        height: 198,
      },
      wide: {
        flexDirection: "row-reverse",
        width: 382,
        height: 96,
        padding: "18px",
      },
      compact: {
        flexDirection: "row",
        width: 236,
        height: 55,
        borderRadius: 0,
        padding: "10px 18px",
      },
    },

    withImg: {
      true: {},
      false: {},
    },
  },
});

const imgBase = style({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: 6,
});
globalStyle(`${imgBase} > div`, {
  // dimmed
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  borderRadius: 6,
  transition: "background-color 0.4s ease",
});
globalStyle(`${hoverContainer}:hover ${imgBase} > div`, {
  backgroundColor: "transparent",
});

export const imgWrapper = recipe({
  base: imgBase,

  variants: {
    variant: {
      large: { height: 143 },
      small: { minHeight: 73 },
      wide: { height: 60 },
      compact: { height: 32 },
    },
  },
});

export const metaContainer = style([
  {
    display: "flex",
    alignItems: "center",
    color: vars.color.gray_500,
    marginBottom: 13,
  },
  tx.cap2_rg,
]);
globalStyle(`${metaContainer} > *:not(:first-child)::before`, {
  content: "'|'",
  height: 12,
  color: vars.color.stroke_400,
  margin: "0 8px",
});
export const metaIconWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

export const contentContainer = recipe({
  base: { display: "flex" },

  variants: {
    variant: {
      large: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      small: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
      },
      wide: {},
      compact: {},
    },
    withImg: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    // --- large variant cases ---
    {
      variants: {
        variant: "large",
        withImg: true,
      },
      style: { padding: 18 },
    },
    {
      variants: {
        variant: "large",
        withImg: false,
      },
      style: { padding: "20px 18px 0 18px" },
    },
    // --- small variant cases ---
    {
      variants: {
        variant: "small",
        withImg: true,
      },
      style: { padding: "14px 13px 18px 13px" },
    },
    {
      variants: {
        variant: "small",
        withImg: false,
      },
      style: { padding: "16px 13px 0 13px" },
    },
  ],
});

const titleStyleBase = style({
  selectors: {
    [`${lightTheme} &`]: {
      color: vars.color.black,
    },
  },
});
export const titleStyle = recipe({
  base: [
    {
      display: "block",
      color: vars.color.white,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    tx.t1_md,
  ],

  variants: {
    variant: {
      large: [titleStyleBase, { width: 249, marginBottom: 7 }],
      small: [
        titleStyleBase,
        {
          display: "-webkit-box",
          width: 174,
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          whiteSpace: "normal",
        },
      ],
      wide: [titleStyleBase, { width: 224 }],
      compact: [
        {
          color: vars.color.gray_500,

          selectors: {
            [`${darkTheme} ${hoverContainer}:hover &`]: {
              color: vars.color.white,
            },
            [`${lightTheme} ${hoverContainer}:hover &`]: {
              color: vars.color.black,
            },
          },
        },
        tx.cap1_sb,
      ],
    },
  },
});

export const content = recipe({
  base: {
    display: "-webkit-box",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    color: vars.color.gray_500,
  },

  variants: {
    variant: {
      large: [
        {
          paddingLeft: 12,
          borderLeft: `1px solid ${vars.color.stroke_400}`,
        },
        tx.b2_180_rg,
      ],
      small: [
        {
          paddingLeft: 10,
          borderLeft: `1px solid ${vars.color.stroke_400}`,
        },
        tx.b3_rg,
      ],
      wide: {},
      compact: {},
    },
    withImg: { true: {}, false: {} },
  },

  compoundVariants: [
    // --- large variant cases ---
    {
      variants: {
        variant: "large",
        withImg: true,
      },
      style: { height: 69, WebkitLineClamp: 3 },
    },
    {
      variants: {
        variant: "large",
        withImg: false,
      },
      style: { height: 92, WebkitLineClamp: 4 },
    },
    // --- small variant cases ---
    {
      variants: {
        variant: "small",
        withImg: true,
      },
      style: { height: 44, WebkitLineClamp: 2 },
    },
    {
      variants: {
        variant: "small",
        withImg: false,
      },
      style: { height: 66, WebkitLineClamp: 3 },
    },
  ],
});
