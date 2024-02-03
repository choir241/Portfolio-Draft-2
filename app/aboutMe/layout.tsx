import React from "react";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - About Me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/d0e0071c1c.js"
        crossOrigin="anonymous"
      />
      <body>{children}</body>
    </html>
  );
}
