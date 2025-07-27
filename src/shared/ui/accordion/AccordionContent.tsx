'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AccordionContext } from "./Accordion";
import * as s from "@/shared/ui/accordion/Accordion.css";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionContent = ({ children, className }: HeaderProps) => {
  const { visible } = useContext(AccordionContext);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="accordion-content"
          className={`${s.accordionContent} ${className ?? ""}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};