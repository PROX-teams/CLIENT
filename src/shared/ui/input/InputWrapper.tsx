import { ComponentProps } from "react";
import { InputForm } from "./inputForm";
import { InputBox } from "./InputBox";

function InputWrapper ({children, className}:ComponentProps<"div">) {

    return(
            <div className={className}>
                {children}
            </div>
    )
}
export {InputWrapper}

InputWrapper.InputBox = InputBox;
InputWrapper.InputForm = InputForm;

export const Input = Object.assign(InputWrapper, {
  InputBox,
  InputForm,
});