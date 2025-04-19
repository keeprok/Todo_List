import { Header } from '@/components/layout/Header';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Header /> {/* 모든 페이지 공통 헤더 */}
        {children}
      </body>
    </html>
  );
}
