"use client";

import React from "react";
import styled from "styled-components";

import { Page } from "@usefui/components";
import { Navigation } from "@/components";

const LayoutContainer = styled(Page.Content)`
  background-color: var(--contrast-color);
  border-radius: var(--measurement-medium-30);

  /* border: var(--measurement-small-30) solid var(--font-color-alpha-10); */
`;

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Navigation />
        <Page.Wrapper
          $navigations={1.07}
          $menus={0}
          className="p-x-medium-30 p-b-medium-10"
        >
          <LayoutContainer>{children}</LayoutContainer>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
