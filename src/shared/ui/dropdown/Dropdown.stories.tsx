// Dropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown/Dropdown",
  component: Dropdown,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

const OPTIONS = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

/** 1) 카테고리 + 아이콘 (라벨 → 아이콘) */
export const Category: Story = {
  render: () => (
   <div style={{width: "6.875rem" }}>
    <Dropdown>
      <Dropdown.Trigger size="md">
        <Dropdown.Value>
          {({ selectedOption }) => (selectedOption ? `${selectedOption}` : "카테고리 선택")}
        </Dropdown.Value>
        <Dropdown.Icon/>
      </Dropdown.Trigger>

      <Dropdown.Menu>
        {OPTIONS.map(item => (
          <Dropdown.Option key={item.id} optionId={item.id}>
            {item.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  ),
  
};

/** 2) 아이콘 + 카테고리 (아이콘 → 라벨) */
export const Icon: Story = {
  render: () => (
    <div style={{width: "7rem" }}>
    <Dropdown>
      <Dropdown.Trigger size="md">
        <Dropdown.Icon/>
        <Dropdown.Value>
          {({ selectedOption }) => (selectedOption ? `${selectedOption}` : "Most Viewed")}
        </Dropdown.Value>
      </Dropdown.Trigger>

      <Dropdown.Menu>
        {OPTIONS.map(o => (
          <Dropdown.Option key={o.id} optionId={o.id}>
            {o.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  ),
};

/** 3) 사이즈 별로 (xs / sm / md / lg) */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12, width: 232 }}>
      <Dropdown>
        <Dropdown.Trigger size="xs">
          <Dropdown.Value>{() => "XS사이즈"}</Dropdown.Value>
          <Dropdown.Icon/>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {OPTIONS.map(o => (
            <Dropdown.Option key={`xs-${o.id}`} optionId={o.id}>
              {o.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger size="sm">
          <Dropdown.Value>{() => "SM (26px)"}</Dropdown.Value>
          <Dropdown.Icon/>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {OPTIONS.map(o => (
            <Dropdown.Option key={`sm-${o.id}`} optionId={o.id}>
              {o.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger size="md">
          <Dropdown.Value>{() => "MD (34px)"}</Dropdown.Value>
          <Dropdown.Icon/>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {OPTIONS.map(o => (
            <Dropdown.Option key={`md-${o.id}`} optionId={o.id}>
              {o.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger size="lg">
          <Dropdown.Value>{() => <div><div>FrontEnd Trend</div><div>저장된 노트 32개</div></div>}</Dropdown.Value>
          <Dropdown.Icon/>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {OPTIONS.map(o => (
            <Dropdown.Option key={`lg-${o.id}`} optionId={o.id}>
              {o.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

/** 4) 테두리 없는 드롭다운 (xs = 17px, border: none) */
export const Borderless: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger size="xs">
        <Dropdown.Value>
          {({ selectedOption }) => (selectedOption ? `${selectedOption}` : "테두리 없음")}
        </Dropdown.Value>
        <Dropdown.Icon/>
      </Dropdown.Trigger>

      <Dropdown.Menu>
        {OPTIONS.map(o => (
          <Dropdown.Option key={`xs-b-${o.id}`} optionId={o.id}>
            {o.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ),
};

/** 5) 노트 드롭다운 (lg = 56px) */
export const Note: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger size="lg">
        <Dropdown.Value>
          {({ selectedOption }) => (selectedOption ? `${selectedOption}` : "노트")}
        </Dropdown.Value>
        <Dropdown.Icon/>
      </Dropdown.Trigger>

      <Dropdown.Menu>
        {OPTIONS.map(o => (
          <Dropdown.Option key={`lg-n-${o.id}`} optionId={o.id}>
            {o.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ),
};

/** 6) 메뉴만 있는 것 (트리거 없이 메뉴 스타일만 확인하고 싶을 때) */
export const Menu: Story = {
  render: () => (
    <div style={{ position: "relative", width: 240 }}>
      <Dropdown>
        {/* 트리거 생략: 메뉴 스타일 프리뷰용 */}
        <Dropdown.Menu independent>
          {OPTIONS.map(o => (
            <Dropdown.Option key={`only-${o.id}`} optionId={o.id}>
              {o.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};