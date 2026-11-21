
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUDSHOP777 | Profile",
  description: "Official profile of DUDSHOP777",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
