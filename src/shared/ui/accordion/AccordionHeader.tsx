import { useContext,PropsWithChildren } from "react";
import { AccordionContext } from "./Accordion";
import * as s from "@/shared/ui/accordion/Accordion.css";

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

export const AccordionHeader = ({ children, className }: HeaderProps) => {
  const { toggle } = useContext(AccordionContext);

  return (
    <div onClick={toggle} className={`${s.accordionHeader} ${className ?? ""}`}>
      {children}
    </div>
  );
};

