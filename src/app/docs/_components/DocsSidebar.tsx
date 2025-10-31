"use client";

import React from "react";
import styled, { css } from "styled-components";

import DocsSidebarLinks from "./DocsSidebarLinks";

import {
  Page,
  Portal,
  ScrollArea,
  Sheet,
  Toolbar,
  Tooltip,
  useToolbar,
} from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const Hide = css`
  display: none;
  width: 0;
  height: 0;
  user-select: none;
`;
const MobileWrapper = styled.div`
  @media (min-width: 768px) {
    ${Hide}
  }
`;
const DesktopWrapper = styled.div`
  @media (max-width: 768px) {
    ${Hide}
  }
`;
const SidebarWrapper = styled(Toolbar)`
  position: relative;
  border: none !important;
  min-width: 0 !important;
  padding: 0 !important;

  @media (max-width: 768px) {
    display: none !important;
    height: 0 !important;
    width: 0 !important;
  }
`;

const HOTKEY = "b";
const BINDKEY = "ctrlKey";

function TriggerIcon() {
  return (
    <span className="flex align-center p-y-small-60">
      <Icon>
        <PixelIcon.LayoutSidebarLeft />
      </Icon>
    </span>
  );
}
function Triggers() {
  const { methods } = useToolbar();
  const { toggleToolbar } = methods;

  const handleOpenMobileNav = () => {
    if (toggleToolbar) toggleToolbar(true);
  };

  return (
    <Portal container="nav-portal">
      <MobileWrapper>
        <Tooltip content="Open Menu">
          <Sheet.Trigger onClick={handleOpenMobileNav}>
            <TriggerIcon />
          </Sheet.Trigger>
        </Tooltip>
      </MobileWrapper>
      <DesktopWrapper>
        <Tooltip content={`Sidebar Ctrl+${HOTKEY.toUpperCase()}`}>
          <Toolbar.Trigger>
            <TriggerIcon />
          </Toolbar.Trigger>
        </Tooltip>
      </DesktopWrapper>
    </Portal>
  );
}

function DesktopSidebar() {
  return (
    <SidebarWrapper
      side="left"
      sizing="large"
      height="auto"
      shortcut
      hotkey={HOTKEY}
      bindkey={BINDKEY}
      defaultOpen
    >
      <Page.Wrapper $navigations={0} $menus={0.9}>
        <Toolbar.Section className="h-100 w-100">
          <ScrollArea className="w-100 h-100 p-l-medium-30" scrollbar>
            <DocsSidebarLinks />
          </ScrollArea>
        </Toolbar.Section>
      </Page.Wrapper>
    </SidebarWrapper>
  );
}
function MobileSidebar() {
  return (
    <MobileWrapper>
      <Sheet side="left" sizing="small">
        <div className="flex justify-end m-b-medium-30">
          <Sheet.Trigger>
            <Icon>
              <PixelIcon.Close />
            </Icon>
          </Sheet.Trigger>
        </div>
        <Page.Wrapper $navigations={0} $menus={0.9}>
          <ScrollArea className="w-100 h-100">
            <DocsSidebarLinks />
          </ScrollArea>
        </Page.Wrapper>
      </Sheet>
    </MobileWrapper>
  );
}

function DocsSidebar() {
  return (
    <Toolbar.Root>
      <Sheet.Root>
        <Triggers />
        <DesktopSidebar />
        <MobileSidebar />
      </Sheet.Root>
    </Toolbar.Root>
  );
}

export default DocsSidebar;
