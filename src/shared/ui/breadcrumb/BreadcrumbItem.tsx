import { forwardRef, ComponentPropsWithoutRef} from 'react';
import { breadcrumbItemStyle } from './Breadcrumb.css';

const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={`${breadcrumbItemStyle} ${className ?? ''}`}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

export default BreadcrumbItem
