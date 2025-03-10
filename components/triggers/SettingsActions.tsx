"use client";

import React from "react";

import ColorModeActions from "./ColorModeActions";

import { DropdownMenu } from "@foundation-ui/components";
import { Icon } from "../common/Icons";

function SettingsActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger
          variant="border"
          sizing="small"
          className="fs-medium-10"
        >
          <Icon>
            <Icon.More />
          </Icon>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sizing="small">
          <DropdownMenu.Item
            radio
            className="flex align-center g-medium-30 justify-between fs-medium-20"
          >
            <ColorModeActions />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default SettingsActions;
