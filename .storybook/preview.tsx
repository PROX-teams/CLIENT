import React from "react";
import type { Preview } from "@storybook/react";
import "../src/shared/styles/global.css";
import { lightTheme } from "../src/shared/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // theme 사용할 수 있도록 설정
  decorators: [
    (Story) => (
      <div className={lightTheme}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
