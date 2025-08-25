"use client";

import { ComponentProps, useContext } from "react";
import { AccordionContext } from "@/shared/model/accordion/contexts/AccordionContextProvider";
import * as S from "@/shared/ui/accordion/Accordion.css";

type TriggerProps = ComponentProps<"button"> & {
  enabled?: boolean;
};

export const AccordionTrigger = ({children, enabled = false, ...props }: TriggerProps) => {
  const { toggle,isOpen } = useContext(AccordionContext);

  return (
    <button
      type="button"
      onClick={toggle}
      className={S.triggerButton}
      {...props}
    >
      <span
        className={S.triggerIcon({ enabled, open: enabled ? isOpen : false })}
      >
        {children}
      </span>
    </button>
  );
};

AccordionTrigger.displayName = "AccordionTrigger";

