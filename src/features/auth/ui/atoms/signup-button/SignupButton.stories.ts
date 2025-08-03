import type { Meta, StoryObj } from "@storybook/nextjs";
import SignupButton from "./SignupButton";

const meta = {
  title: "Button/Signup",
  component: SignupButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variants: { control: "select", description: "스타일" },
    size: { control: "select", description: "크기" },
    disabled: { control: "boolean", description: "비활성화 여부" },
  },
  args: {
    children: "가입 완료",
    variants: "colored",
    size: "lg",
    disabled: false,
  },
} satisfies Meta<typeof SignupButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
