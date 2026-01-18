// src/app/layout.tsx
import type { Metadata } from "next";
import MouseTrail from "./components/MouseTrail";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS410/1411: Foundations of AI and Machine Learning",
  description: "Course website for CSCI 0410: Foundations of AI and Machine Learning",
};


import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-white">
        {children}
        <MouseTrail/>
      </body>
    </html>
  );
}