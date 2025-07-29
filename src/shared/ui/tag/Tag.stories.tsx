import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "태그",
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "기본 태그",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <div>
            {"아이콘"}
        </div>
        아이콘 있는 태그
      </>
    ),
  },
};

export const WithLink: Story = {
  args: {
    children: "링크 태그",
    href: "/example",
  },
};