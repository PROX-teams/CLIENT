import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta = {
  title: "shared/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Header>
        클릭하면 열립니다!
      </Accordion.Header>
      <Accordion.Content>
        <div>
          아코디언 내용입니다.<br />자유롭게 커스텀 컴포넌트를 넣을 수 있습니다.
          아코디언 내용입니다.<br />자유롭게 커스텀 컴포넌트를 넣을 수 있습니다.
        </div>
      </Accordion.Content>
    </Accordion>
    
  ),
};