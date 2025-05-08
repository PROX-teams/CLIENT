import type { Metadata } from "next";
import "@/src/shared/styles/global.css";
import { lightTheme } from "../shared/styles/theme.css";

export const metadata: Metadata = {
  title: "PROX",
  description: "IT 직군을 위한 성장형 컨텐츠 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={lightTheme}>{children}</body>
    </html>
  );
}
