"use client";

import React from "react";
import styled from "styled-components";

import { DisplayXxl } from "@/components";
import { Button } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

export const CTAContainer = styled.section`
  background: var(--contrast-color);
  height: var(--breakpoint-mobile);
`;

function LandingCallToAction() {
  return (
    <CTAContainer className="p-y-large-10 p-x-large-10 flex flex-column g-medium-60 align-center justify-center">
      <DisplayXxl>Try Foundation Ui</DisplayXxl>
      <Button variant="primary" sizing="large">
        Get started now
        <Icon>
          <PixelIcon.ArrowRight />
        </Icon>
      </Button>
    </CTAContainer>
  );
}

export default LandingCallToAction;
