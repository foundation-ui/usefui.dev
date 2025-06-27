"use client";

import React from "react";

import EditorConsoleBody from "./EditorConsoleBody";
import ConsoleBody from "./ConsoleBody";
import CopyCode from "../triggers/CopyCode";

import { Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";
import { TextMuted } from "@/components";

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
        className="flex align-center justify-between p-medium-30 w-100"
      >
        <Toolbar.Trigger
          className="flex align-center g-medium-10"
          rawicon
          id="console-indicator"
        >
          <Icon fill={hasErrors ? "var(--color-red)" : "var(--color-green)"}>
            {hasErrors ? <PixelIcon.Debug /> : <PixelIcon.DebugCheck />}
          </Icon>
        </Toolbar.Trigger>

        <div className="flex g-medium-60 align-center">
          <CopyCode value={value} />
          <TextMuted className="opacity-default-10">|</TextMuted>
          <Tooltip content="Ctrl + <">
            <Toolbar.Trigger variant="ghost" id="toggle-console-trigger">
              <Icon>
                <PixelIcon.ChevronsVertical />
              </Icon>
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
