import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanish Anam | Portfolio",
  description: "Portfolio of Tanish Anam - CS graduate, ML and software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
