import { forwardRef, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import { breadcrumbListStyle } from "./Breadcrumb.css";

const BreadcrumbList = forwardRef<
  HTMLOListElement,
  ComponentPropsWithoutRef<"ol">
>(({ children, className, ...props }, ref) => {

  return (
    <ol ref={ref} className={clsx(breadcrumbListStyle, className)} {...props}>
      {children}
    </ol>
  );
});

BreadcrumbList.displayName = "BreadcrumbList";

export default BreadcrumbList;