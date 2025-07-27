import { useContext, type ReactNode } from "react";
import { DropdownContext } from "./Dropdown";

interface DropdownIconProps {
  children: (props: { isOpen: boolean }) => ReactNode;
}

export const DropdownIcon = ({ children }: DropdownIconProps) => {
  const { isBoxOpen } = useContext(DropdownContext);

  return <>{children({ isOpen: isBoxOpen })}</>;
};