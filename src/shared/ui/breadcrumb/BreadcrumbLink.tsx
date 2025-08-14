"use client";

import Link, { LinkProps } from "next/link";
import { forwardRef, ComponentPropsWithoutRef } from "react";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

type BreadcrumbLinkProps = LinkProps & AnchorProps;

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

BreadcrumbLink.displayName = "BreadcrumbLink";

export default BreadcrumbLink;