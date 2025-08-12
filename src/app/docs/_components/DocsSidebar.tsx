"use client";

import React from "react";
import styled from "styled-components";

import DocsSidebarLinks from "./DocsSidebarLinks";

import { Avatar, Page, Toolbar, Tooltip } from "@usefui/components";
import { Icon, PixelIcon, SocialIcon } from "@usefui/icons";

const SidebarWrapped = styled(Toolbar)`
  @media (max-width: 768px) {
    display: none !important;
    height: 0 !important;
    width: 0 !important;
  }
`;

function DocsSidebar() {
  const hotkey = "k";
  const binkey = "ctrlKey";

  return (
    <Toolbar.Root>
      <SidebarWrapped
        side="left"
        sizing="large"
        height="auto"
        shortcut
        bindkey={binkey}
        hotkey={hotkey}
        defaultOpen
      >
        <Toolbar.Section
          className="flex align-start justify-start m-b-medium-70"
          showoncollapse
        >
          <Toolbar.Item
            showfirstchild
            className="flex align-center justify-between w-100"
          >
            <Avatar
              style={{
                background: "var(--font-color)",
                borderRadius: "var(--measurement-medium-30)",
              }}
            >
              <Icon fill="var(--body-color)">
                <SocialIcon.Foundation />
              </Icon>
            </Avatar>

            <Tooltip content={`Ctrl + ${hotkey}`}>
              <Toolbar.Trigger variant="ghost" sizing="small">
                <Icon>
                  <PixelIcon.LayoutSidebarLeft />
                </Icon>
              </Toolbar.Trigger>
            </Tooltip>
          </Toolbar.Item>
        </Toolbar.Section>

        <Page.Wrapper $navigations={1.9} $menus={0}>
          <Toolbar.Section className="h-100">
            <DocsSidebarLinks />
          </Toolbar.Section>
        </Page.Wrapper>
      </SidebarWrapped>
    </Toolbar.Root>
  );
}

export default DocsSidebar;
