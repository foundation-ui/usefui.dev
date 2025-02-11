"use client";

import React from "react";
import { Page } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Page.Navigation>Nav</Page.Navigation>
        <Page.Menu>Subnav</Page.Menu>

        <Page.Wrapper
          $menus={1}
          $navigations={1.06}
          className="p-t-large-10 p-x-medium-60 p-b-medium-60"
        >
          {children}
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
