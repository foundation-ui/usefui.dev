"use client";

import React from "react";
import styled from "styled-components";

import { Icon, PixelIcon } from "@usefui/icons";
import type { EditorConsoleProps } from "./EditorConsole";

const ConsoleBodyWrapper = styled.div`
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
    <ConsoleBodyWrapper data-mode={mode} className="p-medium-30">
      {value ? (
        <code>{value}</code>
      ) : (
        <Icon fillOpacity={0.3}>
          <PixelIcon.ChevronRight />
        </Icon>
      )}
    </ConsoleBodyWrapper>
  );
}

export default EditorConsoleBody;
