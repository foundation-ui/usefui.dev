"use client";

import React from "react";

import { Avatar, Toolbar } from "@foundation-ui/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";

import { AppDropdown } from "@/components";

function EditorSidebar() {
  return (
    <Toolbar.Root>
      <Toolbar side="left" defaultOpen={false}>
        <Toolbar.Section showoncollapse className="flex justify-center w-100">
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

        <Toolbar.Section
          showoncollapse
          className="flex align-end justify-center w-100 p-b-medium-30"
        >
          {/* <AppDropdown /> */}
        </Toolbar.Section>
      </Toolbar>
    </Toolbar.Root>
  );
}

export default EditorSidebar;
