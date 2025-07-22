"use client";

import { useToggle } from "@/shared/lib/actions/useToggle";
import { SwitchToggle } from "@/shared/ui";
import ActionButton from "@/shared/ui/button/action/ActionButton";
import { tx } from "@/shared/styles/textStyle.css";

export default function MainPage() {
  const { isActive, toggle } = useToggle(false);

  return (
    <>
      <h1 className={tx.b1_rg}>hello world!</h1>
      <ActionButton onClick={() => console.log("click")}>Button</ActionButton>

      <SwitchToggle
        isActive={isActive}
        onToggle={(checked) => toggle(checked)}
      />
    </>
  );
}
