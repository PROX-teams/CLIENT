import {
  isValidElement,
  cloneElement,
  PropsWithChildren,
} from "react";
import { useContext } from "react";
import { DropdownContext } from "./Dropdown";
import * as S from "./Dropdown.css";

interface DropdownBoxProps {
  asChild?: boolean;
  className?: string;
}

type ChildWithClassName = {
  className?: string;
};

function DropdownBox({
  children,
  asChild = false,
  className,
}: PropsWithChildren<DropdownBoxProps>) {
  const { isBoxOpen } = useContext(DropdownContext);

  if (asChild && isValidElement<ChildWithClassName>(children)) {
    return cloneElement(children, {
      className,
    });
  }

  return isBoxOpen ? (
    <div className={`${S.box} ${className ?? ""}`}>{children}</div>
  ) : null;
}

export { DropdownBox };