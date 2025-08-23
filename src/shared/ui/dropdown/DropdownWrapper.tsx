import { HTMLAttributes } from "react";
import clsx from "clsx";
import * as s from "./Dropdown.css"

const DropdownWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement> ) => {
  return (
    <div className={clsx(s.wrapper,className)} {...props}>
      {children}
    </div>
  );
};

export default DropdownWrapper;