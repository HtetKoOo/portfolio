import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Htet Ko Oo | Web Developer",
  description:
    "Bangkok-based web developer and Digital Technology Innovation student building with React, Next.js, and Laravel.",
  metadataBase: new URL("https://www.htetkooo.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Htet Ko Oo | Web Developer",
    description: "Selected web projects and team contributions.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
