"use client";

import React from "react";
import styled from "styled-components";

import type { EditorConsoleProps } from "../EditorConsole";

const ConsoleBodyWrapper = styled.div`
  border-top: var(--measurement-small-30) solid var(--font-color-alpha-10);
  margin-top: var(--measurement-medium-30);
  padding: var(--measurement-medium-30) 0;
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
      <code>{value}</code>
    </ConsoleBodyWrapper>
  );
}

export default EditorConsoleBody;
