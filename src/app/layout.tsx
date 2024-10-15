import type { Metadata } from "next";
import "../styles/globals.css";
import { dinCondensed } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Restricted | Upshift",
  description: "Earn yields from real institutional loans via the Upshift protocol. Democratizing high-yield investments traditionally limited to financial institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dinCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
