import { ComponentProps } from "react";
import { breadcrumbSeparatorStyle } from "./Breadcrumb.css";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    className={`${breadcrumbSeparatorStyle} ${className ?? ''}`.trim()}
    {...props}
  >
    {children ?? ">"}
  </span>
);

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export default BreadcrumbSeparator;