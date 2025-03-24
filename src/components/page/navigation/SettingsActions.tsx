"use client";

import React from "react";

import ColorModeActions from "./ColorModeActions";
import { DropdownMenu } from "@foundation-ui/components";
import { Icon } from "@/components";

function SettingsActions() {
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
          <DropdownMenu.Item className="flex align-center g-medium-30 justify-between fs-medium-20">
            Back to Homepage
            <Icon>
              <Icon.QuickAction />
            </Icon>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            radio
            className="flex align-center g-medium-30 justify-between fs-medium-20"
          >
            Theme
            <ColorModeActions />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default SettingsActions;
