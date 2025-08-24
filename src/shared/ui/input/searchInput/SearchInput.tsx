"use client";

import { forwardRef, ComponentPropsWithoutRef, KeyboardEvent, ReactNode,ChangeEvent} from "react";
import clsx from "clsx";
import * as S from "./SearchInput.css";
import AddIcon from "@/shared/assets/icons/common/add.svg"

interface SearchInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    icon?: ReactNode
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch?: (value?: string) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value,
      onChange,
      icon = <AddIcon/>,
      onSearch,
      className,
      ...props
    },
    ref
  ) => {
    
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSearch?.(value);
      }
    };
    return (
      <div role="search" className={clsx(S.searchWrapper, className)}>
        {icon && <span className={S.iconBox}>{icon}</span>}
        <input
          ref={ref}
          type="search"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className={S.inputBare}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
export default SearchInput;