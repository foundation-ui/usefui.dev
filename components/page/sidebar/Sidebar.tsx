"use client";

import React from "react";
import styled from "styled-components";

import SidebarLinks from "./SidebarLinks";

import { Page, Toolbar, Button } from "@foundation-ui/components";
import { Icon } from "../..";

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
  align-items: end;
  display: flex;
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
            <SidebarLinks />

            <SidebarActionsContainer>
              <Button variant="ghost">
                <Icon viewBox="0 0 64 64">
                  <Icon.Incognito />
                </Icon>
              </Button>
            </SidebarActionsContainer>
          </SidebarMenuSection>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

export default Sidebar;
