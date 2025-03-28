"use client";

import React from "react";
import styled from "styled-components";

import { useColorMode } from "@foundation-ui/tokens";

import { Button, DropdownMenu, Tooltip } from "@foundation-ui/components";
import { Icon } from "@/components";

const SilentItem = styled(DropdownMenu.Item)`
  &:hover,
  &:active {
    background: transparent !important;
    cursor: default;
  }
`;

function PreferencesActions() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger
          variant="ghost"
          sizing="small"
          className="fs-medium-10"
        >
          <Icon>
            <Icon.More />
          </Icon>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sizing="medium">
          <SilentItem
            radio
            className="flex align-center g-medium-30 justify-between "
          >
            <span className="fs-medium-10">Mode</span>

            <span className="flex align-center g-medium-30">
              <Tooltip content="Light">
                <Button
                  sizing="small"
                  variant="ghost"
                  rawicon={colorMode === "light"}
                  onClick={() => setColorMode("light")}
                >
                  <Icon>
                    <Icon.Light />
                  </Icon>
                </Button>
              </Tooltip>
              <Tooltip content="Dark">
                <Button
                  sizing="small"
                  variant="ghost"
                  rawicon={colorMode === "dark"}
                  onClick={() => setColorMode("dark")}
                >
                  <Icon>
                    <Icon.Dark />
                  </Icon>
                </Button>
              </Tooltip>
              <Tooltip content="System">
                <Button
                  sizing="small"
                  variant="ghost"
                  rawicon={colorMode === "system"}
                  onClick={() => setColorMode("system")}
                >
                  <Icon>
                    <Icon.Contrast />
                  </Icon>
                </Button>
              </Tooltip>
            </span>
          </SilentItem>

          <DropdownMenu.Item
            className="flex align-center g-medium-30 justify-between "
            disabled
          >
            <span className="fs-medium-10">Shortcuts</span>
            <Icon>
              <Icon.Keyboard />
            </Icon>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default PreferencesActions;
