"use client";

import styled from "styled-components";
import { Page } from "@usefui/components";

export const LayoutWrapper = styled(Page.Content)`
  background-image: url(/vignette.webp);
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;

  background-blend-mode: overlay;
  mix-blend-mode: overlay;
`;

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page className="h-100 w-100">
      <LayoutWrapper>{children}</LayoutWrapper>
    </Page>
  );
}

export default layout;
