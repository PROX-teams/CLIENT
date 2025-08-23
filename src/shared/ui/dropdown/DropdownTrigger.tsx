import { HTMLAttributes,useContext } from "react";
import clsx from "clsx";
import { DropdownContext } from "@/shared/model/dropdown/contexts/DropdownContextProvider";
import * as S from "./Dropdown.css";


type Layout = "rightLg" | "rightSm" | "left" | "flush"; // a1/a2/a3/a4 대응
type Width  = "auto" | "w232" | "w332" | "w450" | "full";
type Appearance = "solid" | "ghost";

interface DropdownTriggerProps extends HTMLAttributes<HTMLDivElement> {
  layout?: Layout;
  width?: Width;
  appearance?: Appearance;
}

function DropdownTrigger({
  layout,
  width = "auto",
  appearance = "solid",
  className,
  children,
  ...props
}: DropdownTriggerProps) {
  const { toggleBoxOpen } = useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault?.();
    toggleBoxOpen();
  };

  return (
    <div
      className={clsx(
        S.trigger({ layout: layout, width, appearance }),
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
}

export { DropdownTrigger };