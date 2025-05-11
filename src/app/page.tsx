"use client";

import ActionButton from "@/shared/ui/button/action/ActionButton";

export default function MainPage() {
  return (
    <>
      <ActionButton onClick={() => console.log("click")}>Button</ActionButton>
    </>
  );
}
