"use client";

import React from "react";

import ConsoleBody from "./_components/ConsoleBody";
import EditorConsoleActions from "./_components/EditorConsoleActions";
import EditorConsoleBody from "./_components/EditorConsoleBody";

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
      <Toolbar.Item
        showfirstchild
        className="flex align-center justify-between p-y-medium-30"
      >
        <div className="flex align-center g-medium-10">
          <Icon fill={hasErrors ? "var(--color-red)" : "currentColor"}>
            {hasErrors ? <PixelIcon.Debug /> : <PixelIcon.DebugCheck />}
          </Icon>
        </div>

        <EditorConsoleActions value={value} />
      </Toolbar.Item>

      <Toolbar.Section>
        <EditorConsoleBody mode={mode} value={value} />
      </Toolbar.Section>
    </ConsoleBody>
  );
}

export default EditorConsole;
