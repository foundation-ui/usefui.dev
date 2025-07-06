"use client";

import { Page } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page className="h-100 w-100">
      <Page.Content>{children}</Page.Content>
    </Page>
  );
}

export default layout;
