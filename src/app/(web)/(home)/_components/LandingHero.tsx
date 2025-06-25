"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

import { Badge } from "@foundation-ui/components";
import { DisplaySmall, DisplayXxl } from "@/components";

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-tablet-landscape);

  /* text-align: center; */
`;
const HeroDescWrapper = styled.div`
  max-width: var(--breakpoint-tablet);
`;

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 var(--measurement-small-10) var(--alpha-mono-white-30);
  }
  100% {
    box-shadow: 0 0 0 var(--measurement-medium-60) transparent;
  }
`;
const BetaBadge = styled(Badge)`
  animation: ${Pulse} 1s ease-in-out infinite;
`;

function LandingHero() {
  return (
    <Header className="p-x-medium-60 p-t-large-90 grid align-center justify-center">
      <div>
        <hgroup className="m-b-large-30">
          <Badge variant="secondary" shape="round" className="m-b-medium-60">
            <BetaBadge shape="round">&beta;</BetaBadge>
            <span className="p-x-small-60">Open Beta</span>
          </Badge>
          <DisplayXxl className="m-b-medium-30">
            Flow through Development with Production-Grade Libraries
          </DisplayXxl>
          <HeroDescWrapper>
            <DisplaySmall className="m-b-medium-30">
              <span className="opacity-default-60">
                Foundation offers a suite of
              </span>
              &nbsp;powerful Engines and Libraries&nbsp;
              <span className="opacity-default-60">
                optimized to create cohesive UIs
              </span>
              &nbsp;using accessible, robust, and intuitive components{" "}
              <span className="opacity-default-60">alongside</span>
              &nbsp;User Behavior Analytics.
            </DisplaySmall>
          </HeroDescWrapper>
        </hgroup>
      </div>
    </Header>
  );
}

export default LandingHero;
