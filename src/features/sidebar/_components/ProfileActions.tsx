"use client";

import React from "react";
import styled from "styled-components";

import { useColorMode } from "@foundation-ui/tokens";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

import {
  Avatar,
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
const AvatarXSmall = styled(Avatar)`
  background: var(--font-color-alpha-10) !important;

  max-width: var(--measurement-medium-60) !important;
  max-height: var(--measurement-medium-60) !important;
`;

function ProfileActions() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost" rawicon>
          <AvatarXSmall sizing="small">
            <Icon viewBox="0 0 24 24" height={32} width={32} fillOpacity={0.3}>
              <WebIcon.Incognito />
            </Icon>
          </AvatarXSmall>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <SignedOut>
            <hgroup className="p-medium-30">
              <p className="fs-medium-20 opacity-default-60">
                You&apos;re Incognito
              </p>
              <p className="fs-medium-10 opacity-default-30">
                Login to get started&nbsp;<b>for free</b>
              </p>
            </hgroup>
          </SignedOut>

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
                <Icon viewBox="0 0 18 18">
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
