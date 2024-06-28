import "../main.css";

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Weather App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
