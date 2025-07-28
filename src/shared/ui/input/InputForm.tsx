import { ComponentProps } from "react"


function InputForm ({placeholder = "내용을 입력해 주세요", className, ...props}:ComponentProps<"input">) {
    return (
        <input
            placeholder={placeholder}
            className={className}
            {...props}
        />
    )
}

export {InputForm}