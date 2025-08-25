import { useState} from "react";

export const useAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    toggle, 
  };
};