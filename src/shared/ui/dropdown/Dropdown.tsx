'use client';

import { ComponentProps } from 'react';
import { DropdownContextProvider } from '@/shared/model/dropdown/contexts/DropdownContextProvider';
import DropdownWrapper from './DropdownWrapper';
import { DropdownTrigger } from './DropdownTrigger';
import { DropdownMenu } from './DropdownMenu';
import { DropdownOption } from './DropdownOption';
import { DropdownIcon } from './DropdownIcon';
import { DropdownValue } from './DropdownValue';

type DropdownWrapperProps = ComponentProps<typeof DropdownWrapper>;

const Root = ({ children, ...props }: DropdownWrapperProps) => {
  return (
    <DropdownContextProvider>
      <DropdownWrapper {...props}>{children}</DropdownWrapper>
    </DropdownContextProvider>
  );
};

Root.displayName = 'Dropdown.Root';


export const Dropdown = Object.assign(Root, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Option: DropdownOption,
  Icon: DropdownIcon,
  Value: DropdownValue
})