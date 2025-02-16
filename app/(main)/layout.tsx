"use client";

import React from "react";

import { ContrastContainer, Navigation, Sidebar } from "@/components";
import { Page, ScrollArea } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Page.Wrapper $menus={0} $navigations={0} className="flex">
          <Sidebar />
          <section className="w-100 h-100">
            <Navigation />
            <Page.Wrapper
              $menus={1}
              $navigations={0.068} // Margins/Paddings
              className="h-100 w-100 p-r-medium-60 p-b-medium-60"
            >
              <ScrollArea
                as={ContrastContainer}
                className="h-100 w-100 p-medium-60"
              >
                {children}
              </ScrollArea>
            </Page.Wrapper>
          </section>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
