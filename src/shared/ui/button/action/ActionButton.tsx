import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { actionButtonStyle } from "./ActionButton.css";

interface ActionButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "filled" | "outlined"; // 버튼 스타일 종류
  size?: "small" | "medium" | "large"; // 버튼 크기
  danger?: boolean; // 위험 상태를 나타내는 플래그
}

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
