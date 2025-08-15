"use client";

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/navigation";

import { Button } from "@usefui/components";
import { DisplaySmall, DisplayXxl } from "@/components";
import { Icon, PixelIcon } from "@usefui/icons";

const Header = styled.hgroup`
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-tablet-landscape);

  padding-top: calc(var(--measurement-large-30) + var(--measurement-large-60));
  padding-bottom: var(--measurement-large-60);
`;
const HeroDescWrapper = styled.div`
  max-width: var(--breakpoint-tablet);
`;

function LandingHero() {
  const router = useRouter();

  return (
    <Header className="p-x-medium-60">
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
