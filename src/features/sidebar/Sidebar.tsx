"use client";

import React from "react";
import styled from "styled-components";

import ProfileActions from "./_components/ProfileActions";
import SidebarLinks from "./_components/SidebarLinks";

import { Page, Toolbar } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

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
                {/* <ProfileActions /> */}
                <Icon viewBox="0 0 32 32" width={32} height={32}>
                  <Icon.Foundation />
                </Icon>
                <SidebarLinks />
              </div>
            </Toolbar.Section>

            <SidebarActionsContainer>
              <ProfileActions />
            </SidebarActionsContainer>
          </SidebarMenuSection>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

export default Sidebar;
