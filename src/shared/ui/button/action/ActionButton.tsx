import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { actionButtonStyle } from "./ActionButton.css";

interface ActionButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  danger?: boolean;
}

/**
 * `ActionButton` 컴포넌트
 *
 * @param {"filled" | "outlined"} [variant="filled"] - 버튼 스타일 종류
 * @param {"small" | "medium" | "large"} [size="medium"] - 버튼 크기
 *   - `small`: width: auto, height는 38px
 *   - `medium`: width: auto, height는 38px
 *   - `large`: width: 128px, height: 38px
 * @param {boolean} [danger=false] - 위험 상태를 나타내는 플래그
 * @param {React.ReactNode} children - 버튼 내부에 렌더링할 내용
 */

export default function ActionButton({
  variant = "filled",
  size = "medium",
  danger = false,
  children,
  ...props
}: ActionButtonProps) {
  const className = actionButtonStyle({ variant, size, danger });

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
