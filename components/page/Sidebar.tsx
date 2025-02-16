"use client";

import React from "react";
import styled from "styled-components";

import AppSidebarLinks from "../sidebar/AppSidebarLinks";
import AppSidebarSections from "../sidebar/AppSidebarSections";

import { Page, Toolbar } from "@foundation-ui/components";

const SidebarWrapper = styled(Toolbar)`
  border: none !important;
`;
const SidebarDivider = styled.hr`
  height: auto;
  border: none;
  background: var(--font-color-alpha-10);
  background: linear-gradient(
    0deg,
    transparent 0%,

    var(--font-color-alpha-10) 100%
  );
  width: var(--measurement-small-30);
`;

function Sidebar() {
  const hotkey = "k";
  const bindey = "ctrlKey";

  return (
    <Toolbar.Root>
      <SidebarWrapper
        shortcut
        side="left"
        sizing="large"
        height="display"
        hotkey={hotkey}
        bindkey={bindey}
      >
        <Page.Wrapper $navigations={0.4} $menus={0}>
          <Toolbar.Section showoncollapse className="h-100">
            <Toolbar.Item showfirstchild className="flex g-medium-30 h-100">
              <AppSidebarLinks />
              <SidebarDivider />
              <AppSidebarSections />
            </Toolbar.Item>
          </Toolbar.Section>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

export default Sidebar;
