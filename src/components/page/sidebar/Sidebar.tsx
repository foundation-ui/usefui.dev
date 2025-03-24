"use client";

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/navigation";

import SidebarLinks from "./SidebarLinks";
import { Button, Page, Toolbar } from "@foundation-ui/components";
import { Icon } from "@/components";

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
  const router = useRouter();

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
                <Icon viewBox="0 0 267 570" height={28} width={28}>
                  <Icon.Foundation />
                </Icon>

                <SidebarLinks />
              </div>
            </Toolbar.Section>

            <SidebarActionsContainer>
              <Button
                className="fs-medium-20"
                variant="ghost"
                onClick={() => router.push("")}
              >
                <Icon>
                  <Icon.Help />
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
