"use client";

import React from "react";
import styled from "styled-components";

import { Toolbar } from "@usefui/components";

export const ConsoleWrapper = styled(Toolbar)`
  padding: var(--measurement-medium-30) 0 !important;
  align-self: end !important;

  background: var(--contrast-color) !important;
  box-shadow: 0 0 var(--measurement-medium-50) var(--measurement-medium-10)
    var(--contrast-color);

  border: none !important;
  z-index: 1;
`;

function ConsoleBody({ children }: { children: React.ReactNode }) {
  const hotkey = "<";
  const bindkey = "ctrlKey";

  return (
    <Toolbar.Root>
      <ConsoleWrapper
        side="bottom"
        sizing="medium"
        height="auto"
        shortcut
        hotkey={hotkey}
        bindkey={bindkey}
      >
        {children}
      </ConsoleWrapper>
    </Toolbar.Root>
  );
}

export default ConsoleBody;
