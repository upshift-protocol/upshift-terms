import type { Metadata } from "next";
import "../styles/globals.css";
import { dinCondensed } from "@/config/fonts";

const title = "Upshift Finance";
const description = "Earn yields from real institutional loans via the Upshift protocol. Democratizing high-yield investments traditionally limited to financial institutions.";
const rootUrl = "https://terms.upshift.finance";

export const metadata: Metadata = {
  title: `Restricted | ${title}`,
  metadataBase: new URL(rootUrl),
  description: description,
  openGraph: {
    type: "website",
    url: rootUrl,
    title: title,
    description: description,
    siteName: title,
    images: [{
      url: `${rootUrl}/og-image.jpg`,
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
