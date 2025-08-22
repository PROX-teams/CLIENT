import { forwardRef, ComponentPropsWithoutRef, Children, isValidElement, Fragment, ReactNode } from "react";
import clsx from "clsx";
import { breadcrumbListStyle } from "./Breadcrumb.css";
import BreadcrumbSeparator from "./BreadcrumbSeparator";

interface BreadcrumbListProps extends ComponentPropsWithoutRef<"ol"> {
  separator?: ReactNode;
}

const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ children, className, separator, ...props }, ref) => {
    const items = Children.toArray(children).filter(isValidElement);
    const lastIndex = items.length - 1;

    return (
      <ol ref={ref} className={clsx(breadcrumbListStyle, className)} {...props}>
        {items.map((item, index) => (
          <Fragment key={index}>
            {item}
            {index < lastIndex && (
              <BreadcrumbSeparator>
                {separator}
              </BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
      </ol>
    );
  }
);

BreadcrumbList.displayName = "BreadcrumbList";
export default BreadcrumbList;