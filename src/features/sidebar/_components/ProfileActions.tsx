"use client";

import React from "react";

import {
  Avatar,
  Divider,
  DropdownMenu,
  Tooltip,
} from "@foundation-ui/components";
import { Icon } from "@/components";

function ProfileActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost" rawicon>
          <Avatar
            sizing="small"
            style={{ background: "var(--font-color-alpha-10)" }}
          >
            <Icon viewBox="0 0 24 24" height={48} width={48} fillOpacity={0.3}>
              <Icon.Incognito />
            </Icon>
          </Avatar>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <hgroup className="p-medium-30">
            <p className="fs-medium-20 opacity-default-60">
              You&apos;re Incognito
            </p>
            <p className="fs-medium-10 opacity-default-30">
              Login to enable sync
            </p>
          </hgroup>

          <Divider />
          <DropdownMenu.Item className="flex align-center g-medium-30 justify-between fs-medium-10">
            Login
            <Tooltip content="Powered by Clerk">
              <Icon viewBox="0 0 18 18">
                <Icon.Clerk />
              </Icon>
            </Tooltip>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default ProfileActions;
