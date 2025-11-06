"use client";

import React from "react";
import { Divider, DropdownMenu } from "@usefui/components";
import { Icon } from "@usefui/icons";

function DropdownMenuTemplate() {
  return (
    <div className="flex align-center justify-center w-100 h-100 p-t-large-30 p-x-medium-60">
      <DropdownMenu.Root>
        <DropdownMenu>
          <DropdownMenu.Trigger variant="secondary" sizing="large">
            @usefui
          </DropdownMenu.Trigger>

          <DropdownMenu.Content>
            <DropdownMenu.Item
              radio
              className="flex align-center justify-between"
            >
              Radio Item
              <Icon>
                <Icon.ArrowRight />
              </Icon>
            </DropdownMenu.Item>
            <Divider />
            <DropdownMenu.Item>Components</DropdownMenu.Item>
            <DropdownMenu.Item>Tokens</DropdownMenu.Item>
            <DropdownMenu.Item>Core</DropdownMenu.Item>
            <DropdownMenu.Item>Styles</DropdownMenu.Item>
            <DropdownMenu.Item>Hooks</DropdownMenu.Item>
            <DropdownMenu.Item>Icons</DropdownMenu.Item>
            <DropdownMenu.Item>Analytics</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </DropdownMenu.Root>
    </div>
  );
}

export default DropdownMenuTemplate;
