"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={cn(
        "flex-1 rounded-full bg-gray-700 px-6 py-4 text-3xl font-bold text-white hover:bg-gray-500",
        props.className
      )}
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      {props.children}
    </button>
  );
}
