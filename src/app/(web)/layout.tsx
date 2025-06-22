"use client";

import WebNavigation from "./_components/WebNavigation";
import { Page } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page className="h-100 w-100">
      <Page.Content>
        <WebNavigation />
        {children}
      </Page.Content>
    </Page>
  );
}

export default layout;
