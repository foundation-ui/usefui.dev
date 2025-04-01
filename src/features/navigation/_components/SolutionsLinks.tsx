"use client";

import React from "react";
import styled from "styled-components";

import { Avatar, DropdownMenu } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

const SilentItem = styled(DropdownMenu.Item)`
  &:hover,
  &:active {
    background: transparent !important;
  }
`;

function SolutionsLinks() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost">
          <span className="fs-medium-10">Solutions</span>
          <Icon>
            <Icon.DoubleChevron />
          </Icon>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sizing="large" className="grid g-medium-10">
          <SilentItem disabled className="flex align-start g-medium-30">
            <Avatar src="https://place-hold.it/100x100" sizing="small" />
            <div className="grid">
              <span className="fs-medium-20">Tokens Engine</span>
              <span className="fs-medium-10 opacity-default-30">
                JSON Based Design Tokens Engine
              </span>
            </div>
          </SilentItem>
          <SilentItem disabled className="flex align-start g-medium-30">
            <Avatar src="https://place-hold.it/100x100" sizing="small" />
            <div className="grid">
              <span className="fs-medium-20">Components</span>
              <span className="fs-medium-10 opacity-default-30">
                Production Ready React Components
              </span>
            </div>
          </SilentItem>
          <SilentItem disabled className="flex align-start g-medium-30">
            <Avatar src="https://place-hold.it/100x100" sizing="small" />
            <div className="grid">
              <span>Behavior Analytics</span>
              <span className="fs-medium-10 opacity-default-30">
                Built-In User Behavior Analytics
              </span>
            </div>
          </SilentItem>
          <SilentItem disabled className="flex align-start g-medium-30">
            <Avatar src="https://place-hold.it/100x100" sizing="small" />
            <div className="grid">
              <span className="fs-medium-20">CLI</span>
              <span className="fs-medium-10 opacity-default-30">
                Start React, NextJS and Electron Apps
              </span>
            </div>
          </SilentItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default SolutionsLinks;
