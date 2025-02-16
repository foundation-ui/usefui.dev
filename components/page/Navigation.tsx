"use client";

import React from "react";
import styled from "styled-components";
// import { useRouter } from "next/navigation";

import {
  Page,
  Button,
  DropdownMenu,
  ScrollArea,
} from "@foundation-ui/components";
import { Icon } from "../common/Icons";

const NavWrapper = styled(Page.Menu)`
  border: none !important;
`;
function Navigation() {
  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <div className="flex align-center g-medium-60">
        <DropdownMenu.Root>
          <DropdownMenu>
            <DropdownMenu.Trigger variant="ghost">
              <Icon>
                <Icon.Function />
              </Icon>
              <span className="fs-medium-10">Generate&nbsp;Library</span>
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
      </div>

      <div className="flex align-center g-medium-60">
        <Button variant="ghost" className="fs-medium-10">
          <Icon>
            <Icon.DataObject />
          </Icon>
          <span className="fs-medium-10">Schema</span>
        </Button>

        <Button variant="ghost" className="fs-medium-10">
          <Icon>
            <Icon.Run />
          </Icon>
          <span className="fs-medium-10">Execute</span>
        </Button>
      </div>
    </NavWrapper>
  );
}

export default Navigation;
