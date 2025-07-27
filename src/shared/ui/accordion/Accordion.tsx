import { createContext, useState, PropsWithChildren } from 'react';
import { AccordionContent } from './AccordionContent';
import { AccordionHeader } from './AccordionHeader';

// 1. Context 타입 선언
interface AccordionContextProps {
  visible: boolean;
  toggle: () => void;
}

// 2. Context 생성
export const AccordionContext = createContext<AccordionContextProps>({
  visible: false,
  toggle: () => {},
});

// 3. Accordion 컴포넌트
export function Accordion({ children }: PropsWithChildren) {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  return (
    <AccordionContext.Provider value={{ visible, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;