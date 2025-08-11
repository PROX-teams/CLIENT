import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    type: {
      control: "radio",
      options: ["text", "email", "password", "number"],
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
    },
    placeholder: { control: "text" },
    errorMessage: {
      control: "boolean",
      description: "true면 invalid 상태(border 색 등)로 표시",
    },
    className: { control: false },
  },
  args: {
    label: "라벨",
    placeholder: "내용을 입력해 주세요",
    type: "text",
    size: "md",
    errorMessage: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;


export const WithLabel: Story = {
  args: {
    label: "계정",
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
    </div>
  ),

};

export const Types: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      <Input {...args} type="text" label="크리에이터 명"/>
      <Input {...args} type="email" label="계정"/>
      <Input {...args} type="password" label="Password"/>
    </div>
  ),
};

export const InvalidState: Story = {
  args: {
    errorMessage: true,
  },
};
