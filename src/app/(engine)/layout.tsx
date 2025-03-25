"use client";

import { Page, ScrollArea } from "@foundation-ui/components";
import { Navigation, Sidebar, Console, PatternBackground } from "@/components";

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
              className="h-100 w-100 p-r-medium-60"
            >
              <ScrollArea
                as={PatternBackground}
                className="h-100 w-100 grid justify-between"
              >
                <div className="h-100 w-100">{children}</div>
                <div className="h-auto w-100 grid align-end">
                  <Console />
                </div>
              </ScrollArea>
            </Page.Wrapper>
          </section>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
