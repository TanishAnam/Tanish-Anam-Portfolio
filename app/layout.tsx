import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanish Anam | AI/ML Engineer",
  description: "Personal portfolio of Tanish Anam, an AI/ML Engineer focused on machine learning systems and polished software.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
