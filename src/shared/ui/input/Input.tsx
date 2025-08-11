"use client";

import { forwardRef, ComponentPropsWithoutRef } from "react";
import * as s from "./Input.css";

type TextInputProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> & {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  size?: "sm" | "md" ;
  errorMessage?: boolean;
};

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      type = "text",
      placeholder = "내용을 입력해 주세요",
      size = "md",
      errorMessage,
      className,
      ...props
    },
    ref
  ) => {
    const cls = s.inputRecipe({
      size,
      state: errorMessage ? "invalid" : "default",
    });

    return (
      <div className={s.wrapper}>
        {label && <label className={s.label}>{label}</label>}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`${cls} ${className ?? ""}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";