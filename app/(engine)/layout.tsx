"use client";

import React from "react";
import styled from "styled-components";

import { Navigation, Sidebar } from "@/components";
import { Page, ScrollArea } from "@foundation-ui/components";

const DisplayContainer = styled.div`
  --dot-bg: var(--contrast-color);
  --dot-color: var(--font-color-alpha-10);
  --dot-size: var(--measurement-small-20);
  --dot-space: var(--measurement-medium-60);

  background: var(--contrast-color);
  border-radius: var(--measurement-medium-30);
  background: linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    radial-gradient(var(--dot-color) 33%, transparent 100%) !important;
`;

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
              <ScrollArea as={DisplayContainer} className="h-100 w-100">
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
