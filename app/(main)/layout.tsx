"use client";

import React from "react";

import { Navigation } from "@/components";
import { Page } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Navigation />

        <Page.Wrapper $menus={0} $navigations={1.1} className="p-medium-60">
          {children}
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
