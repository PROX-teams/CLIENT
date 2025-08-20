"use client";

import SignupButton from "@/features/auth/ui/atoms/signup-button/SignupButton";
import SocialLoginButton from "@/features/auth/ui/atoms/social-login-button/SocialLoginButton";
import GoogleLogo from "@/shared/assets/logo/google.svg";

export default function MainPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <SignupButton onClick={() => console.log("hi")} />
      <SignupButton disabled={true} />

      <SocialLoginButton provider="Google" icon={<GoogleLogo />}>
        Google로 시작하기
      </SocialLoginButton>
    </div>
  );
}
