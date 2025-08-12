/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import styled from "styled-components";

import { Avatar, Toolbar } from "@usefui/components";
import { Icon, SocialIcon } from "@usefui/icons";

export type EditorSidebarProperties = {
  uba?: void | {
    interactions: any[] | [];
    session: {
      html_snapshot: string;
      entry_time: string;
      entry_epoch: number;
      last_interaction_time: string | null;
      last_interaction_epoch: number | null;
      time_before_interact: number | null;
    };
    system: {
      path: string;
      user_agent: string;
      device_os: string;
      performances: any | null;
      viewport: {
        width: number;
        height: number;
      };
      screen: {
        width: number;
        height: number;
        pixel_depth: number;
        orientation: {
          angle: number;
          type: string;
        };
      };
    };
  };
};

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
