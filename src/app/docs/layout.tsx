"use client";

import DocsSidebar from "./_components/DocsSidebar";
import DocsWrapper from "./_components/DocsWrapper";

import { Page, ScrollArea } from "@usefui/components";
import { DocsContainer } from "./_components/DocsContainer";
import { Navigation } from "@/components";

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
          $menus={0.9}
          $navigations={0}
          className="flex h-100 w-100"
        >
          <DocsSidebar />
          <ScrollArea
            as={DocsWrapper}
            className="h-100 w-100 m-x-medium-30"
            scrollbar
          >
            <DocsContainer className="h-100 w-100 p-x-medium-60 p-t-large-10 p-b-medium-60">
              {children}
            </DocsContainer>
          </ScrollArea>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
