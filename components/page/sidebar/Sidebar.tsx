"use client";

import React from "react";
import styled from "styled-components";

import SidebarLinks from "./SidebarLinks";

import { Page, Toolbar, Avatar } from "@foundation-ui/components";
import { SettingsActions } from "../..";

const SidebarWrapper = styled(Toolbar)`
  border: none !important;
`;
const SidebarMenuSection = styled.div`
  margin: 0 auto;
  padding: var(--measurement-medium-30) var(--measurement-medium-50);
  height: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
`;
const SidebarActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

function Sidebar() {
  return (
    <Toolbar.Root>
      <SidebarWrapper
        side="left"
        sizing="large"
        height="auto"
        defaultOpen={false}
      >
        <Page.Wrapper $navigations={0.4} $menus={0}>
          <SidebarMenuSection>
            <Toolbar.Section showoncollapse className="h-100">
              <div className="grid g-large-10 align-center justify-center">
                <Avatar src="/avatar.png" sizing="small" />
                <SidebarLinks />
              </div>
            </Toolbar.Section>

            <SidebarActionsContainer className="p-medium-30">
              <SettingsActions />
            </SidebarActionsContainer>
          </SidebarMenuSection>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

export default Sidebar;
