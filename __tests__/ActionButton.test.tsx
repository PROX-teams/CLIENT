import { render, screen, fireEvent } from "@testing-library/react";
import ActionButton from "@/shared/ui/button/action/ActionButton";
import "@vanilla-extract/css/disableRuntimeStyles";

// 스타일 import X! (import { actionButtonStyle } ... 하지 마세요)

describe("ActionButton", () => {
  it("children이 잘 표시된다", () => {
    render(<ActionButton>버튼텍스트</ActionButton>);
    expect(screen.getByRole("button", { name: "버튼텍스트" })).toBeInTheDocument();
  });

  it("props에 따라 className이 존재한다", () => {
    render(
      <ActionButton variant="outlined" size="large" danger>
        Danger
      </ActionButton>
    );
    const btn = screen.getByRole("button", { name: "Danger" });
    expect(btn.className).toBeTruthy(); // 값만 확인 (구체적 클래스명 확인 X)
  });

  it("onClick이 정상 동작한다", () => {
    const handleClick = jest.fn();
    render(<ActionButton onClick={handleClick}>클릭</ActionButton>);
    fireEvent.click(screen.getByRole("button", { name: "클릭" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});