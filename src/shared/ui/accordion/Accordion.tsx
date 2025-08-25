import { ComponentProps } from 'react';
import { AccordionContent } from './AccordionContent';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContextProvider } from '@/shared/model/accordion/contexts/AccordionContextProvider';
import { AccordionTrigger } from './AccordionTrigger';
import AccordionWrapper from './AccordionWrapper';

type AccordionWrapper = ComponentProps<typeof AccordionWrapper>;

export default function AccordionRoot({children, ...props}:AccordionWrapper) {

  return(
    <AccordionContextProvider>
      <AccordionWrapper {...props}>{children}</AccordionWrapper>
    </AccordionContextProvider>
  )
}

AccordionRoot.displayName = 'Accordion';

export const Accordion = Object.assign(AccordionRoot, {
  Content: AccordionContent,
  Header:AccordionHeader,
  Trigger: AccordionTrigger
});