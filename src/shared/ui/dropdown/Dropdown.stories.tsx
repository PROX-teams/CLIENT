import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Shared/Dropdown",
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>안녕하세요</Dropdown.Trigger>
      <Dropdown.Box>
        <Dropdown.Option optionId ={1}>Option 1</Dropdown.Option>
        <Dropdown.Option optionId ={2}>Option 2</Dropdown.Option>
        <Dropdown.Option optionId ={3}>Option 3</Dropdown.Option>
      </Dropdown.Box>
    </Dropdown>
  ),
};



