import { ComponentProps } from "react";
import clsx from "clsx";
import * as S from "@/shared/ui/accordion/Accordion.css";

type AccordionHeaderProps = ComponentProps<"div"> & {
  layout?: "inline" | "spread";
};

export const AccordionHeader = ({
  className,
  children,
  layout = "inline",
  ...props
}: AccordionHeaderProps) => {
  return (
    <div
      className={clsx(S.header({ layout }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

AccordionHeader.displayName = "AccordionHeader";