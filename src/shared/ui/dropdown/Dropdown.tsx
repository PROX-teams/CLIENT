import { createContext, PropsWithChildren, ReactNode } from "react";
import { useDropdown } from "@/shared/lib/actions/uesDropdown";

import { DropdownBox } from "./DropdownBox";
import { DropdownTrigger } from "./DropdownTrigger";
import { DropdownOption } from "./DropdownOption";
import { DropdownLabel } from "./DropdownLabel";
import { DropdownIcon } from "./DropdownIcon";

export type DropdownContextType = {
  isBoxOpen: boolean;
  toggleBoxOpen: () => void;

  selectedId: number | null;
  selectedOption: ReactNode | null;

  selectOption: (id: number, label: ReactNode) => void; 
};

export const DropdownContext = createContext<DropdownContextType>({
  isBoxOpen: false,
  toggleBoxOpen: () => {},
  selectedId: null,
  selectedOption: null,
  selectOption: () => {},
});

function Root({ children }: PropsWithChildren) {
  const {
    selectedOption,
    selectedId,
    selectOption,
    isBoxOpen,
    toggleBoxOpen,
  } = useDropdown<number>();

  return (
    <DropdownContext.Provider
      value={{
        isBoxOpen,
        toggleBoxOpen,
        selectedOption,
        selectedId,
        selectOption,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

export const Dropdown = Object.assign(Root, {
  Trigger: DropdownTrigger,
  Box: DropdownBox,
  Option: DropdownOption,
  Label: DropdownLabel,
  Icon: DropdownIcon,
});