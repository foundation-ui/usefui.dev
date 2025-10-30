"use client";
import styled from "styled-components";

import React from "react";
import { Dragbox, Terminal } from "@/components";

const PrimaryBox = styled(Dragbox)`
  position: absolute;

  @media (max-width: 768px) {
    right: calc(var(--measurement-large-60) * -1);
  }
`;
const SecondaryBox = styled(Dragbox)`
  position: absolute;
  top: var(--measurement-large-80);
  right: var(--measurement-large-30);
`;

function LandingHero() {
  const constraintsRef = React.useRef<HTMLDivElement>(null);

  return (
    <Dragbox.Container ref={constraintsRef}>
      <PrimaryBox sizing="medium">
        <div className="h-100 flex flex-column justify-between">
          <Dragbox.Header header="@usefui" meta="v.1" />
          <Terminal />
        </div>
      </PrimaryBox>
      <SecondaryBox sizing="small">
        <div className="h-100 flex flex-column justify-between">
          <Dragbox.Header header="@usefui" meta="v.1" />
          <Terminal />
        </div>
      </SecondaryBox>
    </Dragbox.Container>
  );
}

export default LandingHero;
