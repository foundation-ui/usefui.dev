"use client";

import React from "react";
import styled from "styled-components";

import ConsoleActions from "./_components/ConsoleActions";
import ConsoleBody from "./_components/ConsoleBody";

import { Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

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
  const bindKeyLabel = bindkey.toLowerCase().replace("key", "").toUpperCase();

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
          <Tooltip content={`${bindKeyLabel} + ${hotkey}`}>
            <Toolbar.Trigger variant="ghost">
              <Icon viewBox="0 0 16 16">
                <Icon.Terminal />
              </Icon>
              <span className="fs-medium-10">Console</span>
            </Toolbar.Trigger>
          </Tooltip>

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
