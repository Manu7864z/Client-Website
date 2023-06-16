"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "glaserei-baatz.com",
  description: "Webseite der Glaserei Baatz in Cottbus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content="initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
