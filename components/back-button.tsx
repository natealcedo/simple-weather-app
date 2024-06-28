"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/button";

export function BackButton() {
  const pathName = usePathname();
  // Only render the back button if the current path is now or forecast
  return (
    (pathName === "/now" || pathName === "/forecast") && (
      <div className="absolute left-4 top-4">
        <Link href="/">
          <Button>Back</Button>
        </Link>
      </div>
    )
  );
}
