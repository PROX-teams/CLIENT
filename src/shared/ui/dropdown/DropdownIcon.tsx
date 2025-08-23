import SelectIcon from "@/shared/assets/icons/common/select.svg";
import { ComponentProps } from "react";

type SvgProps = ComponentProps<"svg">;

export const DropdownIcon = ({ children, className, ...props }: SvgProps) => {
  return <>{children ?? <SelectIcon className={className} {...props} />}</>;
};