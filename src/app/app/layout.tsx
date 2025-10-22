"use client";

import React from "react";
import styled from "styled-components";

import { Page } from "@usefui/components";
import { Navigation } from "@/components";

const NoiseBackground = styled(Page.Content)`
  background-image: url(/vignette.webp);
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;

  background-blend-mode: overlay;
  mix-blend-mode: overlay;
`;
const LayoutContainer = styled(Page.Content)`
  background-color: var(--contrast-color);
  border-radius: var(--measurement-medium-30);

  border: var(--measurement-small-30) solid var(--font-color-alpha-10);
`;

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page>
      <NoiseBackground>
        <Navigation />
        <Page.Wrapper
          $navigations={1.07}
          $menus={0}
          className="p-x-medium-30 p-b-medium-10"
        >
          <LayoutContainer>{children}</LayoutContainer>
        </Page.Wrapper>
      </NoiseBackground>
    </Page>
  );
}

export default layout;
