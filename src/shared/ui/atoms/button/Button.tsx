import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { buttonStyle } from "./Button.css";
import { ButtonBase } from "@/shared/types/components.types";

interface ButtonProps
  extends ButtonBase,
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

/**
 * 버튼 베이스 컴포넌트
 *
 * @param {ReactNode} children - 버튼 내부에 표시할 콘텐츠(텍스트, 아이콘 등)
 * @param {"xs"|"sm"|"md"|"lg"} size - 버튼 height 크기  [xs: 24, sm: 28, md: 32, lg: 44]
 * @param {"colored"|"neutral"|"danger"} variants - 버튼 스타일 종류
 * @param {boolean} disabled - 버튼 비활성화 여부
 * @param {string} className - 추가로 적용할 CSS 클래스명
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - HTML 버튼 속성들
 */

export default function Button({
  size = "md",
  variants = "neutral",
  children,
  ...props
}: ButtonProps) {
  const { className, ...restProps } = props;

  return (
    <button
      className={clsx(className, buttonStyle({ size, variants }))}
      {...restProps}
    >
      {children}
    </button>
  );
}
