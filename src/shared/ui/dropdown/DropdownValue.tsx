import { useContext, ReactNode } from "react";
import { DropdownContext } from "@/shared/model/dropdown/contexts/DropdownContextProvider";
import clsx from "clsx";
import * as S from "./Dropdown.css";

interface DropdownValueProps {
  children: (props: { selectedOption: ReactNode | null }) => ReactNode;
}

export const DropdownValue = ({ children }: DropdownValueProps) => {
  const { selectedOption } = useContext(DropdownContext);

  return (
    <div
      className={clsx(selectedOption && S.SelectedValue)}
    >
      {children({ selectedOption })}
    </div>
  );
};