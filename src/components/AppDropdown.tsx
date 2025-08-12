"use client";

import React from "react";

import { useColorMode } from "@usefui/tokens";
import { useRouter } from "next/navigation";

import {
  Badge,
  Button,
  Divider,
  DropdownMenu,
  Tooltip,
} from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";
import { TextMuted } from "./Text";

function AppDropdown() {
  const router = useRouter();
  const { setColorMode } = useColorMode();

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost">
          <Icon>
            <PixelIcon.ChevronsVertical />
          </Icon>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            className="flex g-medium-30 align-center"
            onClick={() => router.push("/docs/introduction")}
          >
            <Icon fillOpacity={0.6}>
              <PixelIcon.BookOpen />
            </Icon>
            Documentation
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex g-medium-30 align-center"
            onClick={() => router.push("https://discord.gg/yer3CgTTwD")}
          >
            <Icon fillOpacity={0.6}>
              <PixelIcon.User />
            </Icon>
            Community
          </DropdownMenu.Item>
          <Divider className="m-y-medium-40" />
          <div className="flex g-medium-30 align-center justify-between">
            <TextMuted className="fs-medium-20 opacity-default-60">
              Theme
            </TextMuted>
            <Badge variant="border">
              <span className="flex align-center g-medium-30">
                <Tooltip content="System">
                  <Button
                    variant="ghost"
                    onClick={() => setColorMode("system")}
                  >
                    <Icon>
                      <PixelIcon.Pixelarticons />
                    </Icon>
                  </Button>
                </Tooltip>
                <Tooltip content="Light">
                  <Button variant="ghost" onClick={() => setColorMode("light")}>
                    <Icon>
                      <PixelIcon.SunAlt />
                    </Icon>
                  </Button>
                </Tooltip>
                <Tooltip content="Dark">
                  <Button variant="ghost" onClick={() => setColorMode("dark")}>
                    <Icon>
                      <PixelIcon.Moon />
                    </Icon>
                  </Button>
                </Tooltip>
              </span>
            </Badge>
          </div>
          <Divider className="m-y-medium-40" />
          <DropdownMenu.Item
            className="flex g-medium-30 align-center"
            onClick={() => router.push("/")}
          >
            <Icon fillOpacity={0.6}>
              <PixelIcon.ArrowLeft />
            </Icon>
            Back to home
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default AppDropdown;
