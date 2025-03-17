"use client";

import React from "react";

import { PatternBackground } from "@/components";
import { Page, ScrollArea } from "@foundation-ui/components";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Page.Wrapper
          $menus={0}
          $navigations={0.1} // Margins/Paddings
        >
          <ScrollArea
            as={PatternBackground}
            className="h-100 w-100 flex align-center justify-center"
          >
            {children}
          </ScrollArea>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
