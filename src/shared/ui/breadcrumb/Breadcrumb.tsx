import { forwardRef, ComponentPropsWithoutRef} from 'react';
import { breadcrumbStyle } from './Breadcrumb.css';
import BreadcrumbList from './BreadcumbList';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

const BreadcrumbRoot = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} className={breadcrumbStyle} {...props} />)

BreadcrumbRoot.displayName = "Breadcrumb"


export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});