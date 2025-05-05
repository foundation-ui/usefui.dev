"use client";

import styled from "styled-components";

import { Page, ScrollArea } from "@foundation-ui/components";
import { Navigation } from "@/features";

const BodyWrapper = styled(ScrollArea)`
  flex-direction: column;
  border-radius: var(--measurement-medium-30);
  background: var(--contrast-color);
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
          $menus={1.068}
          $navigations={0}
          className="h-100 w-100 p-x-medium-60 p-b-medium-60"
        >
          <BodyWrapper className="h-100 w-100 flex align-start justify-between">
            {children}
          </BodyWrapper>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
