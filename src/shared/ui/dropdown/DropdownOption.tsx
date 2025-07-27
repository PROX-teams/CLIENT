import { ReactElement, cloneElement, PropsWithChildren } from "react";
import { useContext } from "react";
import { DropdownContext } from "./Dropdown";
import * as S from "./Dropdown.css";

interface DropdownOptionProps {
  asChild?: boolean;
  optionId:number;
}

function DropdownOption(props: PropsWithChildren<DropdownOptionProps>) {
  const { asChild = false, children, ...restProps } = props;
  const { selectedId, selectOption, toggleBoxOpen } = useContext(DropdownContext);

  const isSelected = restProps.optionId === selectedId;
  const baseClass = `${S.option} ${isSelected ? S.optionSelected : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    selectOption(restProps.optionId, children);
    toggleBoxOpen();
  };

  if (asChild) {
    return cloneElement(children as ReactElement<React.HTMLAttributes<HTMLElement>>, {
      ...restProps,
      onClick: handleClick,
    });
  }



  return (
    <div className={baseClass} onClick={handleClick}>
      {children}
    </div>
  );
};

export {DropdownOption}

