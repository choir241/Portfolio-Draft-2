import React from "react";
import Script from "next/script";
import { Metadata } from "next";
import Header from "../components/Header";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Portfolio",
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
      <body>
        <Header/>
        <Nav/>
        {children}</body>
    </html>
  );
}