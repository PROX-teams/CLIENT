import Link from "next/link";
import Button from "@/shared/ui/atoms/button/Button";
import { ButtonHTMLAttributes } from "react";
import { ButtonBase } from "@/shared/types/components.types";
import RoutingIcon from "@/shared/assets/icons/main/routing.svg";
import * as S from "./GraphNavButton.css";

interface NodeGraphNavButtonProps
  extends ButtonBase,
    ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Node Graph 페이지로 이동시키는 라우팅 버튼입니다.
 */

export default function NodeGraphNavButton({
  size = "md",
  variants = "neutral",
  ...props
}: NodeGraphNavButtonProps) {
  return (
    <Link href="/graph" legacyBehavior>
      {/* Link는 라우팅 기능만 제공하고 렌더링은 Button에게 위임 */}
      <Button
        as="a"
        size={size}
        variants={variants}
        className={S.buttonStyle}
        {...props}
      >
        Node Graph 경험해 보기
        <div className={S.iconWrapperStyle}>
          <RoutingIcon className={S.iconStyle} />
        </div>
      </Button>
    </Link>
  );
}
