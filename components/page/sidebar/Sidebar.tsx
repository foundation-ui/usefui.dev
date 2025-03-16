"use client";

import React from "react";
import styled from "styled-components";

import SidebarLinks from "./SidebarLinks";
import { Icon } from "@/components";

import { Page, Toolbar } from "@foundation-ui/components";
import { UserButton, SignedIn } from "@clerk/nextjs";

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
                <Icon viewBox="0 0 87.3 78" height={28} width={28}>
                  <Icon.GoogleDrive />
                </Icon>

                <SidebarLinks />
              </div>
            </Toolbar.Section>

            <SidebarActionsContainer>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </SidebarActionsContainer>
          </SidebarMenuSection>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

export default Sidebar;
