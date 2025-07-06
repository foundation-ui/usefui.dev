"use client";

import React from "react";
import styled from "styled-components";

import { Avatar, Toolbar } from "@foundation-ui/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";

const SidebarWrapped = styled(Toolbar)`
  @media (max-width: 768px) {
    display: none !important;
    height: 0 !important;
    width: 0 !important;
  }
`;

function EditorSidebar() {
  return (
    <Toolbar.Root>
      <SidebarWrapped side="left" defaultOpen={false}>
        <Toolbar.Section
          className="flex align-start justify-start m-b-medium-70"
          showoncollapse
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
        </Toolbar.Section>
      </SidebarWrapped>
    </Toolbar.Root>
  );
}

export default EditorSidebar;
