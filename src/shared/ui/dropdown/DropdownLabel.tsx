// DropdownLabel.tsx
import { PropsWithChildren, isValidElement, cloneElement, useContext } from "react";
import * as S from "./Dropdown.css";
import { DropdownContext } from "./Dropdown";


interface DropdownLabelProps extends PropsWithChildren {
  asChild?: boolean;
  className?: string;
}


type ChildWithClassName = {
  className?: string;
};

function DropdownLabel({ children, asChild = false, className }: DropdownLabelProps) {
  const { selectedOption  } = useContext(DropdownContext);
  const isSelected = selectedOption === children;

  if (asChild && isValidElement<ChildWithClassName>(children)) {
    return cloneElement(children, {
      className,
    });
  }

  return (
    <label className={`${S.labelVariants.default} ${isSelected ? S.labelVariants.selected : ""}`}>
      {children}
    </label>
  );
}

export { DropdownLabel };