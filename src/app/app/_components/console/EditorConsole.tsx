"use client";

import React from "react";

import EditorConsoleBody from "./EditorConsoleBody";
import ConsoleBody from "./ConsoleBody";

import { CopyButton, Toolbar, Tooltip } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

export type EditorConsoleProps = {
  mode: "meta" | "error";
  value: string | null;
};

function EditorConsole({ mode, value }: EditorConsoleProps) {
  const hasErrors = mode === "error";

  return (
    <ConsoleBody>
      <Toolbar.Section
        showoncollapse
        className="flex align-center justify-between p-x-medium-30 w-100"
      >
        <Icon fill={hasErrors ? "var(--color-red)" : "var(--color-green)"}>
          {hasErrors ? <PixelIcon.Debug /> : <PixelIcon.DebugCheck />}
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
                <PixelIcon.Clipboard />
              </Icon>
            </span>
          </CopyButton>
          <Tooltip content="Ctrl + <">
            <Toolbar.Trigger
              variant="secondary"
              animation="reflective"
              sizing="small"
              id="toggle-console-trigger"
            >
              <span className="p-y-small-60 flex align-center justify-center">
                <Icon>
                  <PixelIcon.ChevronsVertical />
                </Icon>
              </span>
            </Toolbar.Trigger>
          </Tooltip>
        </div>
      </Toolbar.Section>

      <Toolbar.Section>
        <EditorConsoleBody mode={mode} value={value} />
      </Toolbar.Section>
    </ConsoleBody>
  );
}

export default EditorConsole;
