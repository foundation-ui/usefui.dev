"use client";

import React from "react";
import styled from "styled-components";

import { DisplayMd, DisplaySmall } from "@/components";
import { Button } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const SectionContainer = styled.section`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
const Hgroup = styled.hgroup`
  width: 100%;
  max-width: var(--breakpoint-mobile);
`;
const EditorContainer = styled.div`
  max-width: var(--measurement-tablet-landscape);
  width: 100%;
  height: var(--measurement-large-90);
  border-radius: var(--measurement-medium-30);
  background-color: var(--body-color);

  align-self: flex-end;
  justify-self: end;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31%, 1fr));
  grid-gap: var(--measurement-large-10) var(--measurement-large-10);
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const WIKI_CATALOG = [
  {
    name: "foundation-ui/core",
    title: "Token Engine",
    description:
      "Dynamically generate design tokens using application properties.",
    link: "/docs/core/installation",
  },
  {
    name: "foundation-ui/components",
    title: "React Components",
    description:
      "Use fast and accessible components to enhance your UI development.",
    link: "/docs/components/installation",
  },
  {
    name: "foundation-ui/analytics",
    title: "User Behavior Analytics",
    description: "Capture real-time user interactions and system insights.",
    link: "/docs/uba/installation",
  },
];

function LandingProducts() {
  return (
    <section className="flex flex-column g-medium-60">
      <DisplayMd>Production-ready libraries</DisplayMd>
      <Grid>
        {WIKI_CATALOG.map((item, key) => (
          <SectionContainer
            key={`${item?.link}-${key}`}
            className="p-large-10 g-large-10 w-100 h-100"
          >
            <Hgroup>
              <DisplaySmall as="p" className="m-b-medium-60">
                {item?.description}
              </DisplaySmall>

              <Button variant="ghost" sizing="medium">
                {item?.title}
                <Icon>
                  <PixelIcon.ChevronRight />
                </Icon>
              </Button>
            </Hgroup>
            <EditorContainer>a</EditorContainer>
          </SectionContainer>
        ))}
      </Grid>
    </section>
  );
}

export default LandingProducts;
