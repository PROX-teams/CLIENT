import {
  PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";
import { useContext } from "react";
import clsx from "clsx";
import { DropdownContext } from "@/shared/model/dropdown/contexts/DropdownContextProvider";
import * as S from "./Dropdown.css";

interface DropdownTriggerProps {
  className?: string;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

function DropdownTrigger({
  asChild = false,
  size = "md",
  className,
  children,
  ...props
}: PropsWithChildren<DropdownTriggerProps>) {
  const { toggleBoxOpen } = useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault?.();
    toggleBoxOpen();
  };

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<React.HTMLAttributes<HTMLElement>>;
    const mergedOnClick = (e: React.MouseEvent<HTMLElement>) => {
      child.props.onClick?.(e);
      if (e.defaultPrevented) return;
      handleClick(e);
    };

    return cloneElement(child, {
      onClick: mergedOnClick,
      className: clsx(child.props.className, className),
    });
  }

  return (
    <div
      className={clsx(S.trigger({ size }), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
}

export { DropdownTrigger };