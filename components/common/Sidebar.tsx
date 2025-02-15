"use client";

import React from "react";
import styled from "styled-components";
import AppAccordionItem from "./AppAccordionItem";

import {
  Button,
  Divider,
  Page,
  ScrollArea,
  Toolbar,
} from "@foundation-ui/components";
import { Icon } from "..";

const SidebarWrapper = styled(Toolbar)`
  /* border: none !important; */
`;
const SidebarMenuSection = styled.div`
  margin: 0 auto;
  padding: var(--measurement-medium-30) var(--measurement-medium-50);
  height: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
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
        height="auto"
        hotkey={hotkey}
        bindkey={bindey}
      >
        <Page.Wrapper $navigations={0.4} $menus={0}>
          <Toolbar.Section showoncollapse className="h-100">
            <Toolbar.Item showfirstchild className="flex h-100">
              <SidebarLinks />
              <SidebarDivider />
              <SidebarSections />
            </Toolbar.Item>
          </Toolbar.Section>
        </Page.Wrapper>
      </SidebarWrapper>
    </Toolbar.Root>
  );
}

function SidebarLinks() {
  return (
    <SidebarMenuSection className="grid h-100">
      <Toolbar.Section
        showoncollapse
        className="h-auto grid align-start justify-start"
      >
        <h6 className="fs-medium-60">✦</h6>
      </Toolbar.Section>
      <Toolbar.Section
        showoncollapse
        className="h-auto grid align-end justify-end"
      >
        <div className="grid align-center justify-center g-medium-60">
          <Button variant="ghost">
            <Icon>
              <Icon.Help />
            </Icon>
          </Button>

          <Button variant="ghost">
            <Icon viewBox="0 0 64 64" stroke="var(--font-color)">
              <Icon.Incognito />
            </Icon>
          </Button>

          <Divider />
          <Toolbar.Trigger variant="ghost">
            <Icon>
              <Icon.CloseChevron />
            </Icon>
          </Toolbar.Trigger>
        </div>
      </Toolbar.Section>
    </SidebarMenuSection>
  );
}

function SidebarSections() {
  return (
    <ScrollArea as={Toolbar.Section} className="w-100 p-medium-30">
      <div className="grid g-medium-60">
        <AppAccordionItem
          defaultOpen
          value="collection"
          label="Collection"
          icon={
            <Icon>
              <Icon.Models />
            </Icon>
          }
          actions={
            <React.Fragment>
              <Button variant="ghost">
                <Icon>
                  <Icon.Add />
                </Icon>
              </Button>
              <Button variant="ghost">
                <Icon>
                  <Icon.More />
                </Icon>
              </Button>
            </React.Fragment>
          }
          content={
            <div className="grid g-medium-30">
              {[1, 2, 3, 4].map((item) => (
                <Button variant="ghost" style={{ width: "100%" }} key={item}>
                  <span className="flex align-center justify-start p-l-large-10  g-medium-10 w-100 fs-medium-20">
                    Untitled-{item}
                  </span>
                  <span className="p-r-medium-40">
                    <Icon>
                      <Icon.Code />
                    </Icon>
                  </span>
                </Button>
              ))}
            </div>
          }
        />
        <AppAccordionItem
          defaultOpen
          icon={
            <Icon>
              <Icon.Archive />
            </Icon>
          }
          value="drafts"
          label="Drafts"
          actions={
            <React.Fragment>
              <Button variant="ghost">
                <Icon>
                  <Icon.Add />
                </Icon>
              </Button>
              <Button variant="ghost">
                <Icon>
                  <Icon.More />
                </Icon>
              </Button>
            </React.Fragment>
          }
          content={
            <div className="grid g-medium-10">
              <span className="opacity-default-30 p-l-large-10 fs-medium-20">
                No draft yet..
              </span>
            </div>
          }
        />
      </div>
    </ScrollArea>
  );
}

export default Sidebar;
