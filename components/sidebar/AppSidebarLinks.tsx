"use client";

import React from "react";
import styled from "styled-components";

import AppSidebarHeader from "./AppSidebarHeader";
import SettingsActions from "../common/SettingsActions";

import { Button, Toolbar } from "@foundation-ui/components";
import { Icon } from "..";

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
        <SidebarActionsContainer className="grid align-center justify-center g-medium-60">
          <AppSidebarHeader />
        </SidebarActionsContainer>
      </Toolbar.Section>

      <Toolbar.Section
        showoncollapse
        className="h-auto grid align-end justify-end"
      >
        <SidebarActionsContainer className="grid align-center justify-center g-medium-60">
          <SettingsActions />

          <Toolbar.Trigger variant="ghost">
            <Icon>
              <Icon.CloseChevron />
            </Icon>
          </Toolbar.Trigger>

          <Button variant="ghost">
            <Icon viewBox="0 0 64 64">
              <Icon.Incognito />
            </Icon>
          </Button>
        </SidebarActionsContainer>
      </Toolbar.Section>
    </SidebarMenuSection>
  );
}

export default AppSidebarLinks;
