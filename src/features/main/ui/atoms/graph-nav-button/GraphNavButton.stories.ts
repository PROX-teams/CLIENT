import type { Meta, StoryObj } from "@storybook/nextjs";
import NodeGraphNavButton from "./GraphNavButton";

const meta = {
  title: "Button/Route/Graph Nav",
  component: NodeGraphNavButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "버튼 내부에 표시할 콘텐츠" },
    variants: {
      control: "inline-radio",
      options: ["colored", "neutral", "danger"],
      description: "버튼 유형 및 스타일",
    },
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg"],
      description: "크기",
    },
  },
  args: {
    children: "Node Graph 경험해 보기",
    variants: "neutral",
    size: "md",
  },
} satisfies Meta<typeof NodeGraphNavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
