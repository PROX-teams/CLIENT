import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Input/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  errorMessage: {
      control: "text",
      description: "true면 invalid 상태(border 색 등)로 표시",
    },
  className: { control: false },
  },
  args: {
    placeholder: "내용을 입력해 주세요",
    size: "md",
    errorMessage: "에러메세지 입니다.",
  }
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;


export const OnBoarding: Story = {
  args: {
    label: "소개",
    size: "lg"
  },
};

export const Note: Story = {
  args: {
    label: "노트 소개",
  },
};

export const Comment: Story = {
  args: {
    size: "sm"
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12 }}>
      <Textarea {...args} size="sm" label="Small" />
      <Textarea {...args} size="md" label="Medium" />
      <Textarea {...args} size="lg" label="Large" />
    </div>
  ),
};