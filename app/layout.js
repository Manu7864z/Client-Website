"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup.js";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "glaserei-baatz.com",
  description: "Webseite der Glaserei Baatz in Cottbus",
};

export default function RootLayout({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <html lang="de">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content="initial-scale=1, width=device-width"
        />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header onClick={setPopupOpen} />
          {popupOpen && <Popup onClose={setPopupOpen} />}
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
