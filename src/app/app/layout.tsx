"use client";

import { Page } from "@usefui/components";

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
