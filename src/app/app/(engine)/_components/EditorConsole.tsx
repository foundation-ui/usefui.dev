"use client";

import React from "react";

import ConsoleBody from "./containers/ConsoleBody";
import EditorConsoleActions from "./triggers/EditorConsoleActions";
import EditorConsoleBody from "./containers/EditorConsoleBody";

import { Toolbar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

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
        <Toolbar.Trigger className="flex align-center g-medium-10" rawicon>
          <Icon fill={hasErrors ? "var(--color-red)" : "var(--color-green)"}>
            {hasErrors ? <PixelIcon.Debug /> : <PixelIcon.DebugCheck />}
          </Icon>
        </Toolbar.Trigger>

        <EditorConsoleActions value={value} />
      </Toolbar.Section>

      <Toolbar.Section>
        <EditorConsoleBody mode={mode} value={value} />
      </Toolbar.Section>
    </ConsoleBody>
  );
}

export default EditorConsole;
