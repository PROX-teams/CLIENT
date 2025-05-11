import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import {
  baseStyle,
  buttonSizeStyle,
  dangerStyle,
  variantStyle,
} from "./ActionButton.css";

interface ActionButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  danger?: boolean;
}

export default function ActionButton({
  variant = "filled",
  size = "medium",
  danger = false,
  children,
  ...props
}: ActionButtonProps) {
  const className = [
    baseStyle,
    variantStyle[variant],
    buttonSizeStyle[size],
    danger && dangerStyle,
  ].join(" ");

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
