import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

type Layout = "rightSm" | "rightLg" | "left" | "flush";
type Width = "auto" | "w232" | "w332" | "w450" | "full";
type Appearance = "solid" | "ghost";
type Placement = "left" | "center" | "right";

type DropdownStoryProps = {
  layout: Layout;
  width: Width;
  appearance: Appearance;
  icon: "left" | "right" | "none";
  placeholder: string;
  placement: Placement;
  independent:boolean;
};

const OPTIONS = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

function DropdownTemplate(props: DropdownStoryProps) {
  return (
    <Dropdown>
      <Dropdown.Trigger
        layout={props.layout}
        width={props.width}
        appearance={props.appearance}
      >
        {props.icon === "left" && <Dropdown.Icon/>}
        <Dropdown.Value>
          {({ selectedOption }) =>
            selectedOption ? (selectedOption) : props.placeholder
          }
        </Dropdown.Value>
        {props.icon === "right" && <Dropdown.Icon/>}
      </Dropdown.Trigger>

      <Dropdown.Menu placement={props.placement} independent={props.independent}>
        {OPTIONS.map((item) => (
          <Dropdown.Option key={item.id} optionId={item.id}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const meta = {
  title: "Dropdown/Dropdown",
  component: DropdownTemplate,
  // 필요 시 서브컴포넌트 문서화:
  subcomponents: {
    Trigger: (Dropdown).Trigger,
    Menu: (Dropdown).Menu,
    Option: (Dropdown).Option,
    Value: (Dropdown).Value,
    Icon: (Dropdown).Icon,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "실사용 패턴 기준의 Template(=Facade) 컴포넌트. Args로 Trigger/Menu 조합을 제어합니다.",
      },
    },
  },
  tags: ["autodocs"], 
  argTypes: {
    layout: {
      control: "select",
      options: ["rightSm", "rightLg", "left", "flush"],
      table: { category: "Trigger" },
    },
    width: {
      control: "select",
      options: ["auto", "w232", "w332", "w450", "full"],
      table: { category: "Trigger" },
    },
    appearance: {
      control: "select",
      options: ["solid", "ghost"],
      table: { category: "Trigger" },
    },
    icon: {
      control: "radio",
      options: ["left", "right", "none"],
      table: { category: "Trigger" },
    },
    placeholder: { control: "text", table: { category: "Trigger" } },
    placement: {
      control: "radio",
      options: ["start", "center", "end"],
      table: { category: "Menu" },
    },
  },
} satisfies Meta<typeof DropdownTemplate>;

export default meta;

type Story = StoryObj<typeof DropdownTemplate>;

export const Category: Story = {
  args: {
    layout: "rightLg",
    appearance: "solid",
    icon: "right",
    placeholder: "카테고리 선택",
    placement: "left",
  },
};

export const Public: Story = {
  args: {
    layout: "rightLg",
    appearance: "solid",
    icon: "right",
    placeholder: "전체 공개",
    placement: "center",
  },
};

export const Series: Story = {
  args: {
    layout: "rightSm",
    appearance: "solid",
    icon: "right",
    placeholder: "시리즈 선택",
    placement: "center",
  },
};

export const Mode: Story = {
  args: {
    layout: "rightLg",
    appearance: "solid",
    icon: "right",
    placeholder: "Light Mode",
    placement: "right",
  },
};

export const View: Story = {
  args: {
    layout: "left",
    appearance: "solid",
    icon: "left",
    placeholder: "Most Viwed",
    placement: "left",
  },
};


export const Ghost: Story = {
  args: {
    layout: "flush",
    appearance: "ghost",
    icon: "right",
    placeholder: "전체",
    placement: "right",
  },
};

export const Date: Story = {
  args: {
    layout: "flush",
    appearance: "ghost",
    icon: "right",
    placeholder: "For Week",
    placement: "right",
  },
};

export const Series2: Story = {
  args: {
    layout: "rightSm",
    appearance: "solid",
    icon: "right",
    placeholder: "시리즈 선택",
    placement: "center",
  },
};

export const OnlyMenu: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Menu independent>
        <Dropdown.Option optionId={1}>
          북마크 수정
        </Dropdown.Option>
        <Dropdown.Option optionId={2}>
          북마크 삭제
        </Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

export const CustomRender: Story = {
  args: {
    layout: "rightSm",
    width: "w232",
    appearance: "solid",
    placeholder: "Custom render",
    icon: "right",
    placement: "center",
  },
  render: (props) => (
    <Dropdown>
      <Dropdown.Trigger
        layout={props.layout}
        width={props.width}
        appearance={props.appearance}
      >
        {props.icon === "left" && <Dropdown.Icon/>}
        <Dropdown.Value>
          {() => <div>{props.placeholder} {"저장된 노트 32개"}</div>}
        </Dropdown.Value>
        {props.icon === "right" && <Dropdown.Icon/>}
      </Dropdown.Trigger>

      <Dropdown.Menu placement={props.placement} independent={props.independent}>
        {OPTIONS.map((item) => (
          <Dropdown.Option key={item.id} optionId={item.id}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ),
};