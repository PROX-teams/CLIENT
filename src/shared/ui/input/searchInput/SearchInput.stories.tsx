import type { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta = {
  title: "Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {control: "text"},
    onSearch: { action: "onSearch" },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "입력 후 엔터를 눌러 추가해 주세요.",
  },
};
