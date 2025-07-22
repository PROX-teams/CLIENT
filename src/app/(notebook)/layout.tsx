export default function NotebookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      사이드바 / 서브 GNB용
      {children}
    </div>
  );
}
