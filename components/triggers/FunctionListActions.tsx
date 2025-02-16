"use client";

import React from "react";

import { DropdownMenu, ScrollArea } from "@foundation-ui/components";
import { Icon } from "../common/Icons";

function FunctionListActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger
          variant="border"
          sizing="small"
          className="fs-medium-10"
          rawicon
        >
          <Icon>
            <Icon.DoubleChevron />
          </Icon>
          FnName
        </DropdownMenu.Trigger>
        <ScrollArea as={DropdownMenu.Content} sizing="large">
          <DropdownMenu.Item>Library</DropdownMenu.Item>
          <DropdownMenu.Item>Colors</DropdownMenu.Item>
          <DropdownMenu.Item>Font Sizes</DropdownMenu.Item>
          <DropdownMenu.Item>Measurements</DropdownMenu.Item>
          <DropdownMenu.Item>Opacity</DropdownMenu.Item>
          <DropdownMenu.Item>Depths</DropdownMenu.Item>
          <DropdownMenu.Item>Color Alphas</DropdownMenu.Item>
          <DropdownMenu.Item>Color Shades</DropdownMenu.Item>
          <DropdownMenu.Item>Color Tints</DropdownMenu.Item>
          <DropdownMenu.Item>Contrast Scores</DropdownMenu.Item>
          <DropdownMenu.Item>Modular Scale</DropdownMenu.Item>
          <DropdownMenu.Item>Px to Rem</DropdownMenu.Item>
          <DropdownMenu.Item>Px to pt</DropdownMenu.Item>
          <DropdownMenu.Item>Rem to Px</DropdownMenu.Item>
          <DropdownMenu.Item>Pt to Px</DropdownMenu.Item>
          <DropdownMenu.Item>Pt to Rem</DropdownMenu.Item>
          <DropdownMenu.Item>Hex to RGB</DropdownMenu.Item>
          <DropdownMenu.Item>Hex to RGBA</DropdownMenu.Item>
          <DropdownMenu.Item>Hex to HSL</DropdownMenu.Item>
          <DropdownMenu.Item>RGB to HSL</DropdownMenu.Item>
        </ScrollArea>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default FunctionListActions;
