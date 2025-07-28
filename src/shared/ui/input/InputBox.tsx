import { ComponentProps, } from "react"


// props 하나로 묶어 버리는 것도 괜찮을 듯
function InputBox ({children,className}:ComponentProps<"div">) {


    //forwardRef 도입 생각하기 
    return (
        <div className={className}>
            {children}
        </div>

    )
}

export {InputBox}