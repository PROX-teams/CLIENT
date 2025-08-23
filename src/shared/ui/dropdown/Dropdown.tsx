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

export default function DropdownRoot({ children, ...props }: DropdownWrapperProps) {
  return (
    <DropdownContextProvider>
      <DropdownWrapper {...props}>{children}</DropdownWrapper>
    </DropdownContextProvider>
  );
}

DropdownRoot.displayName = 'Dropdown';

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Option: DropdownOption,
  Icon: DropdownIcon,
  Value: DropdownValue,
});