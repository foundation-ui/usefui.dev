"use client";

import React from "react";
import styled from "styled-components";

import {
  Button,
  Divider,
  Toolbar,
  DropdownMenu,
} from "@foundation-ui/components";
import { ColorModeActions, Icon } from "..";

const SidebarMenuSection = styled.div`
  margin: 0 auto;
  padding: var(--measurement-medium-30) var(--measurement-medium-50);
  height: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
`;
const SidebarActionsContainer = styled.div`
  justify-items: center;
`;

function AppSidebarLinks() {
  return (
    <SidebarMenuSection className="grid h-100">
      <Toolbar.Section
        showoncollapse
        className="h-auto grid align-start justify-start"
      >
        <h6 style={{ color: "var(--color-green)" }} className="fs-medium-60">
          ✦
        </h6>
      </Toolbar.Section>
      <Toolbar.Section
        showoncollapse
        className="h-auto grid align-end justify-end"
      >
        <SidebarActionsContainer className="grid align-center justify-center g-medium-60">
          <Button variant="ghost">
            <Icon>
              <Icon.Help />
            </Icon>
          </Button>

          <DropdownMenu.Root>
            <DropdownMenu>
              <DropdownMenu.Trigger
                variant="ghost"
                sizing="small"
                className="fs-medium-10"
              >
                <Icon>
                  <Icon.Settings />
                </Icon>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content sizing="medium">
                <DropdownMenu.Item>Survey</DropdownMenu.Item>
                <DropdownMenu.Item>Feedback</DropdownMenu.Item>
                <Divider />
                <DropdownMenu.Item>Preferences</DropdownMenu.Item>
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

          <Button variant="ghost">
            <Icon viewBox="0 0 64 64">
              <Icon.Incognito />
            </Icon>
          </Button>

          <Toolbar.Trigger variant="ghost">
            <Icon>
              <Icon.CloseChevron />
            </Icon>
          </Toolbar.Trigger>
        </SidebarActionsContainer>
      </Toolbar.Section>
    </SidebarMenuSection>
  );
}

export default AppSidebarLinks;
