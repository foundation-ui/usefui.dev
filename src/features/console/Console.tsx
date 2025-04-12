"use client";

import React from "react";
import styled from "styled-components";

import ConsoleActions from "./_components/ConsoleActions";
import ConsoleBody from "./_components/ConsoleBody";

import { Toolbar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

const ConsoleWrapper = styled(Toolbar)`
  border: none !important;
  menu {
    align-self: center !important;
  }
`;

export type ConsoleProps = {
  mode: "meta" | "error";
  value: string | null;
};

function Console({ mode, value }: ConsoleProps) {
  const hotkey = "<";
  const bindkey = "ctrlKey";
  const hasErrors = mode === "error";

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
        <Toolbar.Item
          showfirstchild
          className="flex align-center justify-between p-y-medium-30"
        >
          <div className="flex align-center g-medium-10">
            <Icon fill={hasErrors ? "var(--color-red)" : "currentColor"}>
              {hasErrors ? <PixelIcon.Debug /> : <PixelIcon.DebugCheck />}
            </Icon>
          </div>

          <ConsoleActions value={value} />
        </Toolbar.Item>

        <Toolbar.Section>
          <ConsoleBody mode={mode} value={value} />
        </Toolbar.Section>
      </ConsoleWrapper>
    </Toolbar.Root>
  );
}

export default Console;
