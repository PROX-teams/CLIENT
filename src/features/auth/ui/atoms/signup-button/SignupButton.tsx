import Button from "@/shared/ui/atoms/button/Button";
import * as S from "./SignupButton.css";
import { ButtonHTMLAttributes } from "react";
import { ButtonBase } from "@/shared/types/components.types";

interface SignupButtonProps
  extends ButtonBase,
    ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * 회원가입 완료 버튼 컴포넌트
 *
 * @param {"xs"|"sm"|"md"|"lg"} size - 버튼 크기
 * @param {"colored"|"neutral"|"danger"} variants - 버튼 스타일 종류
 * @param {boolean} disabled - 버튼 비활성화 여부
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - HTML 버튼 속성들
 */

export default function SignupButton({
  size = "lg",
  variants = "colored",
  disabled = false,
  ...props
}: SignupButtonProps) {
  return (
    <Button
      size={size}
      variants={variants}
      className={disabled ? S.signupButton.disabled : S.signupButton.default}
      disabled={disabled}
      {...props}
    >
      가입 완료
    </Button>
  );
}
