"use client";

import { Page } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>{children}</Page.Content>
    </Page>
  );
}

export default layout;
