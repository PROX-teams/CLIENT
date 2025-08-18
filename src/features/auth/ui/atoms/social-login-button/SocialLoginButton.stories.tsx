import type { Meta, StoryObj } from "@storybook/nextjs";
import SocialLoginButton from "./SocialLoginButton";
import GoogleLogo from "@/shared/assets/logo/google.svg";
import NaverLogo from "@/shared/assets/logo/naver.svg";
import KakaoLogo from "@/shared/assets/logo/kakao.svg";

const meta = {
  title: "Button/Signup/Social Login",
  component: SocialLoginButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    provider: {
      control: "select",
      description: "인증 제공업체(provider) 지정",
    },
    size: { control: "select", description: "크기" },
    variants: { control: "select", description: "스타일" },
    children: { control: "text", description: "버튼 텍스트" },
    icon: { control: false, description: "소셜 로그인 아이콘" },
  },
} satisfies Meta<typeof SocialLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    provider: "Google",
    size: "lg",
    variants: "neutral",
    children: "Google로 시작하기",
    icon: <GoogleLogo />,
  },
};

export const Naver: Story = {
  args: {
    provider: "Naver",
    size: "lg",
    variants: "neutral",
    children: " Naver로 시작하기",
    icon: <NaverLogo />,
  },
};

export const Kakao: Story = {
  args: {
    provider: "Kakao",
    size: "lg",
    variants: "neutral",
    children: "Kakao로 시작하기",
    icon: <KakaoLogo />,
  },
};
