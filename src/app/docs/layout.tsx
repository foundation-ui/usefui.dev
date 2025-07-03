"use client";

import AppNavigation from "../../components/AppNavigation";
import DocsSidebar from "./_components/DocsSidebar";
import DocsWrapper from "./_components/DocsWrapper";

import { Page, ScrollArea } from "@foundation-ui/components";
import { Footer, MaxWidthContainerSmall } from "@/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Page.Wrapper $menus={0} $navigations={0} className="flex">
          <DocsSidebar />
          <section className="w-100 h-100">
            <AppNavigation />
            <Page.Wrapper
              $menus={2.5}
              $navigations={0} // Margins/Paddings
              className="h-100 w-100"
            >
              <ScrollArea as={DocsWrapper} className="h-100 w-100" scrollbar>
                <MaxWidthContainerSmall className="h-100 w-100 p-x-medium-60 p-t-large-10 p-b-medium-60">
                  {children}
                </MaxWidthContainerSmall>
              </ScrollArea>
            </Page.Wrapper>
            <Footer />
          </section>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
