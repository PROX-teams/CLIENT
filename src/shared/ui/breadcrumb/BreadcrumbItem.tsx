"use client";

import { forwardRef, ComponentPropsWithoutRef} from 'react';
import { breadcrumbItemStyle, breadcrumbItemInactiveStyle } from './Breadcrumb.css';
import clsx from "clsx";

interface BreadcrumbItemProps extends ComponentPropsWithoutRef<"li"> {
  active?: boolean;
}

const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  BreadcrumbItemProps
>(({ active = false, className, ...props }, ref) => (
  <li
    ref={ref}
    className={clsx(breadcrumbItemStyle, active && breadcrumbItemInactiveStyle, className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

export default BreadcrumbItem
