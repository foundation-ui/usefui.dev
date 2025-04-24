"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-up"}
      appearance={{
        layout: {
          animations: false,
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
