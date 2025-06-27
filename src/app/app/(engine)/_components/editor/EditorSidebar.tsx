/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import { Avatar, Toolbar } from "@foundation-ui/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";

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

function EditorSidebar({ uba }: EditorSidebarProperties) {
  return (
    <Toolbar.Root>
      <Toolbar side="left" defaultOpen={false}>
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
      </Toolbar>
    </Toolbar.Root>
  );
}

export default EditorSidebar;
