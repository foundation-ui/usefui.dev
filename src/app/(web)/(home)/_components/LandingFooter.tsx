"use client";

import React from "react";
import styled from "styled-components";

import { AppLink, MaxWidthContainer } from "@/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";

const FooterWrapper = styled.footer`
  background: var(--contrast-color);
  border-top: var(--measurement-small-30) solid var(--font-color-alpha-10);
`;

function LandingFooter() {
  return (
    <FooterWrapper className="p-x-medium-60 p-y-large-10">
      <MaxWidthContainer>
        <div className="flex justify-between align-center g-large-10">
          <span className="flex align-center g-medium-10">
            <Icon width={24} height={24}>
              <SocialIcon.Foundation />
            </Icon>
            <h6 className="fs-medium-20">usefui.dev</h6>
          </span>

          <div className="grid g-medium-10">
            <p className="fs-medium-10">
              <span className="opacity-default-60">Built by</span>&nbsp;
              <AppLink target="_blank" href="https://github.com/nnsncl">
                nnsncl
              </AppLink>
              <span className="opacity-default-60">&nbsp;at&nbsp;</span>
              <AppLink target="_blank" href="https://github.com/foundation-ui">
                Foundation UI
              </AppLink>
              .
              <span className="opacity-default-60">
                &nbsp;The source code is available on&nbsp;
              </span>
              <AppLink
                target="_blank"
                href="https://github.com/foundation-ui/design-system"
              >
                Github
              </AppLink>
              .
            </p>
          </div>
        </div>
      </MaxWidthContainer>
    </FooterWrapper>
  );
}

export default LandingFooter;
