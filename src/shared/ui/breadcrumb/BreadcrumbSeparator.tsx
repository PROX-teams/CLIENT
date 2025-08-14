import { ComponentProps } from "react";
import clsx from "clsx";
import { breadcrumbSeparatorStyle } from "./Breadcrumb.css";
import SeparatorIcon from "@/shared/assets/icons/common/separator.svg";

const BreadcrumbSeparator = ({
  children = <SeparatorIcon />,
  className,
  ...props
}: ComponentProps<"span">) => (
  <span className={clsx(breadcrumbSeparatorStyle, className)} {...props}>
    {children}
  </span>
);

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export default BreadcrumbSeparator;