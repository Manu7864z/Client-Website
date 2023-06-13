"use client";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "./styles.js";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "glaserei-baatz.com",
  description: "Webseiter der Glaserei Baatz in Cottbus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
