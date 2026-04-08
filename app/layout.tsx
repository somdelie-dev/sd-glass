import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SD Glass and Aluminium | Professional Glass & Aluminium Solutions",
  description:
    "SD Glass and Aluminium provides professional glass and aluminium services including windows, sliding doors, shopfronts, and repairs for homes, offices, and commercial spaces. Call 068 179 1378 for a quote.",
  keywords: [
    "glass installation",
    "aluminium windows",
    "sliding doors",
    "shopfronts",
    "glass repairs",
    "aluminium frames",
  ],
  openGraph: {
    title: "SD Glass and Aluminium | Professional Glass & Aluminium Solutions",
    description:
      "Quality glass and aluminium installations for residential and commercial spaces. Windows, doors, shopfronts, and repairs.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
