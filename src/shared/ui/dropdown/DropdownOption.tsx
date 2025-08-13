import { PropsWithChildren } from "react";
import { useContext } from "react";
import clsx from "clsx";
import { DropdownContext } from "@/shared/model/dropdown/contexts/DropdownContextProvider";
import * as S from "./Dropdown.css";

interface DropdownOptionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  optionId: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

function DropdownOption({
  optionId,
  onClick,
  className,
  children,
  ...props
}: PropsWithChildren<DropdownOptionProps>) {
  const { selectedId, selectOption, toggleBoxOpen } = useContext(DropdownContext);

  const isSelected = optionId === selectedId;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    selectOption(optionId, children);
    toggleBoxOpen();
    onClick?.(e);
  };

  return (
    <div
      className={clsx(S.option, isSelected && S.optionSelected, className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
}

export { DropdownOption };