import type { Meta, StoryObj } from "@storybook/nextjs";
import GithubLinkButton from "./GithubLinkButton";

const meta = {
  title: "Button/Route/Github",
  component: GithubLinkButton,
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
    href: { control: "text", description: "깃허브 주소" },
  },
  args: {
    children: "Github",
    variants: "neutral",
    size: "xs",
    href: "https://github.com/PROX-teams",
  },
} satisfies Meta<typeof GithubLinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Github_Link: Story = {};
