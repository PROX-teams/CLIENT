import * as s from "./Tag.css";
import {ReactNode,ComponentProps} from "react";
import Link from "next/link";

interface TagProps extends ComponentProps<'a'> {
  children: ReactNode;
  href?: string;
} 
export const Tag = ({
  children,
  href,
  ...props
}: TagProps ) => {
    if (href) {
    return (
        <Link href={href} className={s.tagbox} {...props}>
            {children}
        </Link>
    )
    }
    return (
        <span className={s.tagbox} {...props}>
          {children}
        </span>
  );
}
