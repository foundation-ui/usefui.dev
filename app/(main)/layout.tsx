"use client";

import React from "react";

import { Navigation, Sidebar } from "@/components";
import { Page } from "@foundation-ui/components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <Page.Content>
        <Page.Wrapper
          $menus={0}
          $navigations={0}
          className="flex"
          style={
            {
              // background: "black",
            }
          }
        >
          <Sidebar />
          <section className="w-100 h-100">
            <Navigation />

            {children}
          </section>
        </Page.Wrapper>
      </Page.Content>
    </Page>
  );
}

export default layout;
