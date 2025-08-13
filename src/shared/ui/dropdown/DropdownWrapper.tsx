import { HTMLAttributes } from "react";
import clsx from "clsx";

interface DropdownWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disableClickOutside?: boolean;
}

const DropdownWrapper = ({ children, className, ...props }: DropdownWrapperProps ) => {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default DropdownWrapper;