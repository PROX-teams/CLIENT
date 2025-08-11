"use client";

import { forwardRef, ComponentPropsWithoutRef } from "react";
import * as s from "./Input.css";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  errorMessage?: boolean;
  uiSize?: "sm" | "md" ;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      errorMessage,
      uiSize = "md",
      placeholder = "내용을 입력해 주세요",
      className,
      ...props
    },
    ref
  ) => {
    const cls = s.textareaRecipe({ size: uiSize, state: errorMessage ? "invalid" : "default", });

    return (
      <div className={s.wrapper}>
        {label && <label className={s.label}>{label}</label>}

        <textarea
          ref={ref}
          placeholder={placeholder}
          className={`${cls} ${className ?? ""}`}
          aria-invalid={!!errorMessage}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;