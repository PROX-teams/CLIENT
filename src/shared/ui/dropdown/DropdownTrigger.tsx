import {
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useContext
} from "react";
import { DropdownContext } from "./Dropdown";
import * as S from "./Dropdown.css"


interface DropdownTriggerProps {
  className?: string;
  asChild?: boolean;
}

function DropdownTrigger(props : PropsWithChildren<DropdownTriggerProps>) {
  const { asChild = false, children, ...restProps } = props;
  const { selectedOption, toggleBoxOpen } = useContext(DropdownContext);
  

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleBoxOpen();
  };

    if (asChild) {
    return cloneElement(children as ReactElement<React.HTMLAttributes<HTMLElement>>, {
      ...restProps,
      onClick: handleClick,
    });
  }

  return (
    <div
      className={selectedOption ? `${S.triggerSelected}` : `${S.trigger}`}
      onClick={handleClick}
    >
      {selectedOption ?? children}
    </div>
  );
}

export { DropdownTrigger };
