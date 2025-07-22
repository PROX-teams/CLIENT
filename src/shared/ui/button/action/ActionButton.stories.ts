import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import ActionButton from "./ActionButton";

const meta = {
  title: "Button/Action",
  component: ActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", description: "Button 스타일" },
    size: { control: "select", description: "Button 크기" },
    danger: {
      control: "boolean",
      description: "위험 동작(예: 삭제)에 대한 스타일 여부",
    },
    children: { control: "text", description: "Button 내부 텍스트" },
  },
  args: { variant: "filled", size: "medium", danger: false, onClick: fn() },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "미리보기",
    variant: "outlined",
    size: "small",
    danger: false,
  },
};

export const Medium: Story = {
  args: {
    children: "생성하기",
    variant: "filled",
    size: "medium",
    danger: false,
  },
};

export const Large: Story = {
  args: {
    children: "저장하기",
    variant: "filled",
    size: "large",
    danger: false,
  },
};

export const Danger: Story = {
  args: {
    children: "노트 삭제하기",
    variant: "outlined",
    size: "large",
    danger: true,
  },
};
