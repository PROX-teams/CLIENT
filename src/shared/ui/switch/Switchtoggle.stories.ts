import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SwitchToggle } from "./Switchtoggle";

const meta = {
  title: "Button/Toggle/Switch",
  component: SwitchToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      control: "boolean",
      description: "필터 활성화 여부",
    },
    onToggle: {
      action: "clicked",
      description: "필터 클릭 시 호출되는 함수",
    },
  },
  args: { isActive: false, onToggle: fn() },
} satisfies Meta<typeof SwitchToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const InActive: Story = {
  args: {
    isActive: false,
  },
};
