import { forwardRef, ComponentPropsWithoutRef } from 'react';
import { breadcrumbStyle } from './Breadcrumb.css';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import BreadcrumbList from './BreadcrumList';
import clsx from "clsx";


const BreadcrumbRoot = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"nav">
>(({className, ...props }, ref) => <nav ref={ref} className={clsx(breadcrumbStyle,className) } {...props} />
)

BreadcrumbRoot.displayName = "Breadcrumb"

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
  List:BreadcrumbList
});