import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Capital Quizzer",
  description: "Test your skills in geography by guessing the capital cities of countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
