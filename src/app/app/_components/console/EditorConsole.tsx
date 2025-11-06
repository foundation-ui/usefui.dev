"use client";

import React from "react";
import styled from "styled-components";

import EditorConsoleBody from "./EditorConsoleBody";

import { CopyButton, Toolbar, Tooltip } from "@usefui/components";
import { Icon } from "@usefui/icons";

export type EditorConsoleProps = {
  mode: "meta" | "error";
  value: string | null;
};

const ConsoleWrapper = styled(Toolbar)`
  padding: var(--measurement-medium-30) 0 !important;
  align-self: end !important;

  background: var(--contrast-color) !important;
  box-shadow: 0 0 var(--measurement-medium-50) var(--measurement-medium-10)
    var(--contrast-color);

  border: none !important;
  z-index: 1;
`;
function ConsoleRoot({ children }: { children: React.ReactNode }) {
  const hotkey = "$";
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

function EditorConsole({ mode, value }: EditorConsoleProps) {
  return (
    <ConsoleRoot>
      <Toolbar.Section
        showoncollapse
        className="flex align-center justify-between p-x-medium-30 w-100"
      >
        <Icon>
          <Icon.TerminalSquare />
        </Icon>

        <div className="flex g-medium-10 align-center">
          <CopyButton
            value={String(value)}
            variant="secondary"
            animation="reflective"
            sizing="small"
          >
            <span className="p-y-small-60 flex align-center justify-center">
              <Icon>
                <Icon.CopyDashed />
              </Icon>
            </span>
          </CopyButton>
          <Tooltip content="Ctrl + $">
            <Toolbar.Trigger
              variant="secondary"
              animation="reflective"
              sizing="small"
              id="toggle-console-trigger"
            >
              <span className="p-y-small-60 flex align-center justify-center">
                <Icon fill="currentColor">
                  <Icon.LayoutBottom />
                </Icon>
              </span>
            </Toolbar.Trigger>
          </Tooltip>
        </div>
      </Toolbar.Section>

      <Toolbar.Section>
        <EditorConsoleBody mode={mode} value={value} />
      </Toolbar.Section>
    </ConsoleRoot>
  );
}

export default EditorConsole;
