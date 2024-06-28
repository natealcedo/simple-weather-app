import "../main.css";

import React from "react";
import { Metadata } from "next";

import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "Simple Weather App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen bg-[url('./public/background.jpg')] bg-cover bg-center">
          <BackButton />
          {children}
        </main>
      </body>
    </html>
  );
}
