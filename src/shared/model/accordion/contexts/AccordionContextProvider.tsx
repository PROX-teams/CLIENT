"use client";

import { createContext, PropsWithChildren } from 'react';
import { useAccordion } from '../hooks/useAccordion';

export interface AccordionContextProps {
  isOpen: boolean;
  toggle: () => void;
}

export const AccordionContext = createContext<AccordionContextProps>({
  isOpen: false,
  toggle: () => {},
});

function AccordionContextProvider({ children }: PropsWithChildren) {

    const{ isOpen, toggle} = useAccordion();


    return (
      <AccordionContext.Provider
          value={{ isOpen, toggle }}
      >
        {children}
      </AccordionContext.Provider>
    );
}

export {AccordionContextProvider}