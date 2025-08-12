"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

import { useRouter } from "next/navigation";

import { Badge, Button } from "@usefui/components";
import { DisplaySmall, DisplayXxl } from "@/components";
import { Icon, PixelIcon } from "@usefui/icons";

const Header = styled.hgroup`
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-tablet-landscape);
`;
const HeroDescWrapper = styled.div`
  max-width: var(--breakpoint-tablet);
`;

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 var(--measurement-small-10) var(--font-color-alpha-10);
  }
  100% {
    box-shadow: 0 0 0 var(--measurement-medium-60) transparent;
  }
`;
const BetaBadge = styled(Badge)`
  animation: ${Pulse} 2s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
`;

function LandingHero() {
  const router = useRouter();

  return (
    <Header className="p-x-medium-60 p-t-large-80 align-center justify-center m-b-large-30">
      <div className="m-b-medium-60 flex align-center">
        <BetaBadge>&beta;</BetaBadge>
        <small className="p-l-medium-30 p-r-medium-10 opacity-default-60">
          Open Beta
        </small>
      </div>
      <DisplayXxl className="m-b-medium-30">
        Headless Design System Platform for Modern Product Teams
      </DisplayXxl>
      <HeroDescWrapper>
        <DisplaySmall as="p" className="m-b-large-10">
          <span className="opacity-default-60">
            Foundation offers a suite of
          </span>
          &nbsp;powerful Engines and Libraries&nbsp;
          <span className="opacity-default-60">
            optimized to create cohesive UIs
          </span>
          &nbsp;using accessible, robust, and intuitive components—
          <span className="opacity-default-60">all while leveraging</span>
          &nbsp;build-time user analytics{" "}
          <span className="opacity-default-60">to make smarter decisions.</span>
        </DisplaySmall>

        <span className="flex flex-wrap align-center g-medium-60">
          <Button
            variant="primary"
            sizing="large"
            onClick={() => router.push("/docs/introduction")}
          >
            Get started
          </Button>
          <Button variant="ghost" onClick={() => router.push("/app")}>
            Generate libraries
            <Icon>
              <PixelIcon.ChevronRight />
            </Icon>
          </Button>
        </span>
      </HeroDescWrapper>
    </Header>
  );
}

export default LandingHero;
