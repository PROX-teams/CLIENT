import Link from "next/link";
import Button from "@/shared/ui/atoms/button/Button";
import { AnchorHTMLAttributes } from "react";
import { ButtonBase } from "@/shared/types/components.types";
import * as S from "./GithubLinkButton.css";
import GithubIcon from "@/shared/assets/logo/github.svg";

interface GithubLinkButtonProps
  extends ButtonBase,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

/**
 * 사용자의 깃허브 주소로 이동시키는 라우팅 버튼입니다.
 */

export default function GithubLinkButton({
  size = "xs",
  variants = "neutral",
  href,
  ...props
}: GithubLinkButtonProps) {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      size={size}
      variants={variants}
      className={S.buttonStyle}
      disabled={!href}
      {...props}
    >
      <GithubIcon className={S.iconStyle} />
      Github
    </Button>
  );
}
