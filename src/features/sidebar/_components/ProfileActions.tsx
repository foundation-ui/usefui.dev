"use client";

import React from "react";
import styled from "styled-components";

import { useColorMode } from "@foundation-ui/tokens";

import ProfileAvatar from "./ProfileAvatar";
import ProfileHeader from "./ProfileHeader";

import { SignedIn, SignOutButton } from "@clerk/nextjs";
import {
  Divider,
  DropdownMenu,
  Tooltip,
  Button,
} from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon, WebIcon } from "@foundation-ui/icons";

const SilentItem = styled(DropdownMenu.Item)`
  &:hover,
  &:active {
    background: transparent !important;
    cursor: default;
  }
`;

function ProfileActions() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost" rawicon>
          <ProfileAvatar />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <ProfileHeader />
          <Divider />
          <SilentItem
            radio
            className="flex align-center g-medium-30 justify-between "
          >
            Mode
            <span className="flex align-center g-medium-30">
              <Tooltip content="Light">
                <Button
                  sizing="small"
                  variant="ghost"
                  rawicon={colorMode === "light"}
                  onClick={() => setColorMode("light")}
                >
                  <Icon>
                    <WebIcon.Light />
                  </Icon>
                </Button>
              </Tooltip>
              <Tooltip content="Dark">
                <Button
                  sizing="small"
                  variant="ghost"
                  rawicon={colorMode === "dark"}
                  onClick={() => setColorMode("dark")}
                >
                  <Icon>
                    <PixelIcon.Moon />
                  </Icon>
                </Button>
              </Tooltip>
              <Tooltip content="System">
                <Button
                  sizing="small"
                  variant="ghost"
                  rawicon={colorMode === "system"}
                  onClick={() => setColorMode("system")}
                >
                  <Icon>
                    <PixelIcon.Contrast />
                  </Icon>
                </Button>
              </Tooltip>
            </span>
          </SilentItem>
          <DropdownMenu.Item
            className="flex align-center g-medium-30 justify-between "
            onClick={() =>
              window.open("https://github.com/foundation-ui/token-engine")
            }
          >
            Docs
            <Icon>
              <PixelIcon.BookOpen />
            </Icon>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex align-center g-medium-30 justify-between fs-medium-10"
            onClick={() =>
              window.open("https://github.com/foundation-ui/token-engine")
            }
          >
            Github
            <Icon viewBox="0 0 14 14">
              <SocialIcon.Github />
            </Icon>
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex align-center g-medium-30 justify-between fs-medium-10"
            onClick={() =>
              window.open("https://github.com/foundation-ui/token-engine")
            }
          >
            Home Page
            <Icon>
              <PixelIcon.Open />
            </Icon>
          </DropdownMenu.Item>

          <SignedIn>
            <SignOutButton>
              <DropdownMenu.Item className="flex align-center g-medium-30 justify-between fs-medium-10">
                Sign Out
                <Icon>
                  <PixelIcon.Logout />
                </Icon>
              </DropdownMenu.Item>
            </SignOutButton>
          </SignedIn>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default ProfileActions;
