/**
 * 기본 아이콘 렌더링과 props 커스텀가능
 * 다른 아이콘 사용시 children으로
 * 상태에 따른 아이콘 변화는 아직 도입하지 않음 추후 필요시 도입가능
 */


import SelectIcon from "@/shared/assets/icons/common/select.svg"
import { ComponentProps } from "react";

export const DropdownIcon = ({ children, ...svgProps }: ComponentProps<"svg">) => {

  return <>{children ?? <SelectIcon {...svgProps}/>}</>;
};


