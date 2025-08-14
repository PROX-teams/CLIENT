import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";
import { Fragment,ReactNode  } from "react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const exampleBreadcrumb = (
  items: string[],
  separatorContent?: ReactNode
) => {
  const lastIndex = items.length - 1;

  return (
    <Breadcrumb>
      <Breadcrumb.List>
        {items.map((label, i) => (
          <Fragment key={`${label}-${i}`}>
            <Breadcrumb.Item active={i === lastIndex}>
              {i !== lastIndex ? (
                <Breadcrumb.Link href={`/${label}`}>{label}</Breadcrumb.Link>
              ) : (
                label
              )}
            </Breadcrumb.Item>

            {i < lastIndex && (
              <Breadcrumb.Separator>
                {separatorContent}
              </Breadcrumb.Separator>
            )}
          </Fragment>
        ))}
      </Breadcrumb.List>
    </Breadcrumb>
  );
};

export const Default: Story = {
  render: () => exampleBreadcrumb (["soojin", "MCP 이해하기", "재귀 컴포넌트를 위한 SEO 적응기"]),
};

export const CustomSeparator: Story = {
  render: () => exampleBreadcrumb (["soojin", "MCP 이해하기", "재귀 컴포넌트를 위한 SEO 적응기"], ">"),
};

export const SingleItem: Story = {
  render: () => exampleBreadcrumb (["재귀 컴포넌트를 위한 SEO 적응기"]),
};