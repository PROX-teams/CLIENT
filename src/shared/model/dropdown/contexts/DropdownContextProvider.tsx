import { createContext, PropsWithChildren, ReactNode } from "react";
import { useDropdown } from "@/shared/model/dropdown/hooks/uesDropdown";

export type DropdownContextType = {
  isBoxOpen: boolean;
  toggleBoxOpen: () => void;
  selectedId: number | null;
  selectedOption: ReactNode | null;
  selectOption: (id: number, option: ReactNode) => void; 
};

export const DropdownContext = createContext<DropdownContextType>({
  isBoxOpen: false,
  toggleBoxOpen: () => {},
  selectedId: null,
  selectedOption: null,
  selectOption: () => {},
});

function DropdownContextProvider({ children }: PropsWithChildren) {
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


export { DropdownContextProvider }

