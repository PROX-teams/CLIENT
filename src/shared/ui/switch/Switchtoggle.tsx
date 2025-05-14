import { ChangeEvent } from "react";
import * as styles from "./Switchtoggle.css";

interface SwitchToggleProps {
  isActive: boolean; // 현재 활성화 상태
  onToggle: (isActive: boolean) => void; // 활성화 상태를 변경하는 콜백 토글 함수
}

function SwitchToggle({ isActive, onToggle }: SwitchToggleProps) {
  return (
    // label 클릭 시 내부 input 요소를 자동으로 포커싱하여 토글 (기능적 요소)
    <label className={styles.label}>
      {/* 실제 체크박스 요소 (화면에서는 숨겨짐) */}
      <input
        type="checkbox"
        checked={isActive}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onToggle(e.target.checked)
        }
        className={styles.input}
      />
      {/* 토글 스위치 배경 + knob 슬라이더 역할 (시각적 요소) */}
      <span className={styles.slider} />
    </label>
  );
}

export { SwitchToggle };
