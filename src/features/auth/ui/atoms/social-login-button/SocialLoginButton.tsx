import { ButtonHTMLAttributes, PropsWithChildren, Children } from "react";
import { ButtonBase } from "@/shared/types/components.types";
import Button from "@/shared/ui/atoms/button/Button";
import { buttonStyle } from "./SocialLoginButton.css";

interface SocialLoginButtonProps
  extends ButtonBase,
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  provider: "Google" | "Kakao" | "Naver";
  icon: React.ReactNode;
}

/**
 * 소셜 로그인을 트리거 버튼 컴포넌트입니다.
 * provider, 아이콘, 텍스트를 받아 지정된 스타일의 버튼을 렌더링합니다.
 * @param {'Google' | 'Kakao' | 'Naver'} provider - 인증 서비스 제공업체를 지정합니다.
 * @param {string} [size='lg'] - 버튼의 크기를 지정합니다.
 * @param {string} [variants='neutral'] - 버튼의 스타일 변형을 지정합니다.
 * @param {React.ReactNode} children - 버튼 내부에 표시될 텍스트 또는 컨텐츠입니다.
 * @param {React.ReactNode} icon - 버튼 왼쪽에 표시될 아이콘 컴포넌트입니다.
 * @example
 * <SocialLoginButton provider="Google" icon={<GoogleIcon />}>
 * Google로 시작하기
 * </SocialLoginButton>
 */

export default function SocialLoginButton({
  provider,
  size = "lg",
  variants = "neutral",
  children,
  icon,
  ...props
}: SocialLoginButtonProps) {
  const childrenContent = Children.toArray(children);
  const isGoogle = childrenContent.includes("Google로 시작하기");

  return (
    <Button
      size={size}
      variants={variants}
      className={isGoogle ? buttonStyle.lg : buttonStyle.sm}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </Button>
  );
}
