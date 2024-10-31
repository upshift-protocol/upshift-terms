import type { Metadata } from "next";
import "../styles/globals.css";
import { dinCondensed } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Restricted | Upshift",
  description: "Earn yields from real institutional loans via the Upshift protocol. Democratizing high-yield investments traditionally limited to financial institutions.",
  openGraph: {
    type: "website",
    url: "https://terms.upshift.finance",
    title: "Upshift Finance",
    description: "Earn yields from real institutional loans via the Upshift protocol. Democratizing high-yield investments traditionally limited to financial institutions.",
    siteName: "Upshift Finance",
    images: [{
      url: "https://terms.upshift.finance/og-image.jpg",
    }],
  }
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
