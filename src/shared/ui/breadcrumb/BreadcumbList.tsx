
import {
  forwardRef,
  ComponentPropsWithoutRef,
  Children,
  isValidElement,
  Fragment,
  cloneElement,
  ReactElement,
} from 'react';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import { breadcrumbListStyle, breadcrumbItemInactiveStyle } from './Breadcrumb.css';

const BreadcrumbList = forwardRef<
  HTMLOListElement,
  ComponentPropsWithoutRef<'ol'>
>(({ children, ...props }, ref) => {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <ol ref={ref} className={breadcrumbListStyle} {...props}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const styledItem = isLast
          ? cloneElement(item as ReactElement<{ className?: string }>, {
              className: `${breadcrumbItemInactiveStyle}`,
            })
          : item;

        return (
          <Fragment key={index}>
            {styledItem}
            {!isLast && <BreadcrumbSeparator />}
          </Fragment>
        );
      })}
    </ol>
  );
});
BreadcrumbList.displayName = 'BreadcrumbList';

export default BreadcrumbList;