"use client";

import React from "react";
import styled from "styled-components";

import { Toolbar } from "@usefui/components";

export const ConsoleWrapper = styled(Toolbar)`
  /* border: none !important; */
  padding: var(--measurement-medium-30) 0 !important;
  align-self: end !important;
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
        defaultOpen
      >
        {children}
      </ConsoleWrapper>
    </Toolbar.Root>
  );
}

export default ConsoleBody;
