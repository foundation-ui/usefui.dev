"use client";

import React from "react";
import styled from "styled-components";

import { DisplaySmall } from "@/components";
import { Button } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const SectionContainer = styled.section`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Hgroup = styled.hgroup`
  width: 100%;
  max-width: var(--breakpoint-mobile);
`;
const EditorContainer = styled.div`
  max-width: var(--measurement-tablet-landscape);
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--body-color);
`;

function LandingIntegration() {
  return (
    <SectionContainer className="p-large-10 g-large-10 w-100 h-100">
      <Hgroup>
        <DisplaySmall as="p" className="m-b-medium-60">
          Built with Typescript, Foundation UI can be integrated with your
          favorite React-based frameworks.
        </DisplaySmall>

        <Button variant="ghost" sizing="medium">
          Installation guide
          <Icon>
            <PixelIcon.ChevronRight />
          </Icon>
        </Button>
      </Hgroup>
      <EditorContainer>a</EditorContainer>
    </SectionContainer>
  );
}

export default LandingIntegration;
