import type { Meta, StoryObj } from "@storybook/nextjs";
import LoginButton from "./LoginButton";

const meta = {
  title: "Button/Auth/Login",
  component: LoginButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "버튼 내부에 표시할 콘텐츠" },
    variants: { control: "select", description: "스타일" },
    size: { control: "select", description: "크기" },
  },
  args: {
    children: "로그인",
    variants: "colored",
    size: "sm",
  },
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
