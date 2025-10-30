"use client";

import React from "react";
import styled from "styled-components";

import type { EditorConsoleProps } from "./EditorConsole";
import { Divider } from "@usefui/components";

const ConsoleBodyWrapper = styled.div`
  height: 100%;
  width: 100%;

  code {
    font-size: var(--fontsize-small-50);
  }

  &[data-mode="error"] {
    code {
      color: var(--color-red) !important;
    }
  }
`;

function EditorConsoleBody({ mode, value }: EditorConsoleProps) {
  return (
    <ConsoleBodyWrapper data-mode={mode}>
      <Divider />
      <div className="p-medium-30 fs-small-50">
        {value ? (
          <kbd className=" color-red">{value}</kbd>
        ) : (
          <kbd className="opacity-default-30">$</kbd>
        )}
      </div>
    </ConsoleBodyWrapper>
  );
}

export default EditorConsoleBody;
