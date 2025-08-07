import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <a href="/products">
            Products
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Shoes</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>dho dhfb</span>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};