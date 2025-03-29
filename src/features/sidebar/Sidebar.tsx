"use client";

import React from "react";
import styled from "styled-components";

import ProfileActions from "./_components/ProfileActions";
import SidebarLinks from "./_components/SidebarLinks";

import { Button, Page, Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon } from "@/components";

const SidebarWrapper = styled(Toolbar)`
  border: none !important;
`;
const SidebarMenuSection = styled.div`
  margin: 0 auto;
  padding: var(--measurement-medium-40) 0;
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
              <div className="grid g-medium-60 align-center justify-center">
                <ProfileActions />
                <SidebarLinks />
              </div>
            </Toolbar.Section>

            <SidebarActionsContainer>
              <Tooltip content="Support">
                <Button sizing="small" variant="ghost" disabled>
                  <Icon>
                    <Icon.Help />
                  </Icon>
                </Button>
              </Tooltip>
            </SidebarActionsContainer>
          </SidebarMenuSection>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

export default Sidebar;
