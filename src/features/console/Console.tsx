"use client";

import React from "react";
import styled from "styled-components";

import ConsoleActions from "./_components/ConsoleActions";

import { Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

const ConsoleWrapper = styled(Toolbar)`
  border: none !important;
  padding: var(--measurement-medium-60) 0 !important;
  menu {
    align-self: center !important;
  }
`;
const ConsoleBody = styled.div`
  border-top: var(--measurement-small-30) solid var(--font-color-alpha-10);
  margin-top: var(--measurement-medium-30);
  padding: var(--measurement-medium-30) 0;
  height: 100%;
  width: 100%;
`;

function Console() {
  const hotkey = "C";
  const bindkey = "shiftKey";

  return (
    <Toolbar.Root>
      <ConsoleWrapper
        side="bottom"
        sizing="large"
        height="display"
        shortcut
        hotkey={hotkey}
        bindkey={bindkey}
      >
        <Toolbar.Item
          showfirstchild
          className="flex align-center justify-between"
        >
          <Tooltip content={`⇧ + ${hotkey}`}>
            <Toolbar.Trigger variant="ghost">
              <Icon viewBox="0 0 16 16">
                <Icon.Terminal />
              </Icon>
            </Toolbar.Trigger>
          </Tooltip>

          <ConsoleActions />
        </Toolbar.Item>

        <Toolbar.Section>
          <ConsoleBody>
            <p className="fs-medium-10 opacity-default-30">
              No logs available to display...
            </p>
          </ConsoleBody>
        </Toolbar.Section>
      </ConsoleWrapper>
    </Toolbar.Root>
  );
}

export default Console;
