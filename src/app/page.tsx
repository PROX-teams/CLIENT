'use client'
import { Dropdown } from "@/shared/ui/dropdown/Dropdown"


export default function MainPage() {
  const OPTIONS = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

  return  <div style={{ display: "flex", gap: "1rem" }}>  <div style={{width: "6.875rem" }}>
    ㄹㄷㄹㄷㄹㄷㅈㄹㄷㄹ
      <Dropdown>
        <Dropdown.Trigger size="md">
          <Dropdown.Value>
            {({ selectedOption }) => (selectedOption ? `${selectedOption}` : "카테고리 선택")}
          </Dropdown.Value>
          <Dropdown.Icon/>
        </Dropdown.Trigger>
  
        <Dropdown.Menu placement="topRight">
          {OPTIONS.map(item => (
            <Dropdown.Option key={item.id} optionId={item.id}>
              {item.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div style={{width: "6.875rem" }}>
      <Dropdown>
        <Dropdown.Trigger size="md">
          <Dropdown.Value>
            {({ selectedOption }) => (selectedOption ? `${selectedOption}` : "카테고리 선택")}
          </Dropdown.Value>
          <Dropdown.Icon/>
        </Dropdown.Trigger>
  
        <Dropdown.Menu placement="topRight">
          {OPTIONS.map(item => (
            <Dropdown.Option key={item.id} optionId={item.id}>
              {item.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      </div>
      </div>
}
