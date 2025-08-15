"use client";

import { Page } from "@usefui/components";
import { LayoutWrapper } from "./_components/LayoutWrapper";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page className="h-100 w-100">
      <LayoutWrapper>{children}</LayoutWrapper>
    </Page>
  );
}

export default layout;
