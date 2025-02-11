"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ColorModeProvider } from "@foundation-ui/tokens";
import { ResetStyles, CSSRoot, TypographyRoot } from "@foundation-ui/styles";

export function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <ResetStyles />
        <CSSRoot />
        <TypographyRoot />

        {children}
      </ColorModeProvider>
    </QueryClientProvider>
  );
}
