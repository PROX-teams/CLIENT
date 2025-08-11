import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Textarea, { TextareaProps } from "./Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "라벨",
    placeholder: "내용을 입력해 주세요",
    uiSize: "md",
    errorMessage: false,
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    uiSize: {
      control: "radio",
      options: ["sm", "md"],
    },
    errorMessage: {
      control: "boolean",
      description: "true면 invalid 상태(border 등)로 표시",
    },
    className: { control: false },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Label: Story = {
  args: {
    label: "설명",
    placeholder: "자유롭게 입력해 주세요",
  },
};

export const Sizes: Story = {
  render: (args: TextareaProps) => (
    <div style={{ display: "grid", gap: 12, width: 420 }}>
      <Textarea {...args} uiSize="sm" label="Small" />
      <Textarea {...args} uiSize="md" label="Medium" />
    </div>
  ),
  args: {
    label: undefined,
    uiSize: "md"
  },
};

export const InvalidState: Story = {
  args: {
    label: "자기소개",
    errorMessage: true,
    placeholder: "최소 10자 이상 입력해 주세요",
  },
};
