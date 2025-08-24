import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./Input";

const meta = {
  title: "Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "radio",
      options: ["text", "email", "password", "number"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    placeholder: { control: "text" },
    errorMessage: {
      control: "text",
      description: "true면 invalid 상태(border 색 등)로 표시",
    },
    className: { control: false },
  },
  args: {
    label: "라벨",
    placeholder: "내용을 입력해 주세요",
    type: "text",
    errorMessage: "에러메세지 입니다."
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;


export const OnBoarding: Story = {
  args: {
    label: "계정",
    size: "sm"
  },
};

export const Profile: Story = {
  args: {
    label: "계정",
  },
};

export const Series: Story = {
  args: {
    label: "시리즈명",
    size: "sm"
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12 }}>
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
      <Input {...args} size="lg" label="Large" />
    </div>
  ),
};