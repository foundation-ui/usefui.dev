"use client";

import React from "react";

import { DropdownMenu } from "@foundation-ui/components";
import { Icon } from "..";

function DataDeliveryActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="border" sizing="small">
          <Icon>
            <Icon.More />
          </Icon>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sizing="medium">
          <DropdownMenu.Item className="flex justify-between align-center">
            Download
            <Icon>
              <Icon.Download />
            </Icon>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex justify-between align-center">
            Sync collection
            <Icon>
              <Icon.Cloud />
            </Icon>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default DataDeliveryActions;
