import {
  isValidElement,
  cloneElement,
  PropsWithChildren,
} from "react";
import { useContext } from "react";
import clsx from "clsx";
import { DropdownContext } from "@/shared/model/dropdown/contexts/DropdownContextProvider";
import * as S from "./Dropdown.css";

interface DropdownBoxProps {
  asChild?: boolean;
  className?: string;
  independent?: boolean;
}

type ChildWithClassName = {
  className?: string;
};

function DropdownMenu({
  children,
  asChild = false,
  className,
  independent,
  ...props
}: PropsWithChildren<DropdownBoxProps>) {
  const { isBoxOpen } = useContext(DropdownContext);

  const isOpen = independent ?? isBoxOpen;

  if (asChild && isValidElement<ChildWithClassName>(children)) {
    return isOpen
      ? cloneElement(children, {
          className: clsx(children.props.className, className),
        })
      : null;
  }

  return isOpen ? (
    <div className={clsx(S.menu, className)} {...props}>
      {children}
    </div>
  ) : null;
}

export { DropdownMenu };