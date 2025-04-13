"use client";

import styled from "styled-components";

import { Navigation, Sidebar } from "@/features";
import { Page, ScrollArea } from "@foundation-ui/components";

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
        <Page.Wrapper $menus={0} $navigations={0} className="flex">
          <Sidebar />
          <section className="w-100 h-100">
            <Navigation />
            <Page.Wrapper
              $menus={1}
              $navigations={0.068} // Margins/Paddings
              className="h-100 w-100 p-r-medium-60 p-b-medium-30"
            >
              <BodyWrapper className="h-100 w-100 flex justify-between">
                {children}
              </BodyWrapper>
            </Page.Wrapper>
          </section>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
