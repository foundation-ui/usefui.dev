"use client";

import React from "react";

import { useColorMode } from "@foundation-ui/tokens";
import { useRouter } from "next/navigation";

import {
  Badge,
  Button,
  Divider,
  DropdownMenu,
  Tooltip,
} from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function AppDropdown() {
  const router = useRouter();
  const { setColorMode } = useColorMode();

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost">
          <Icon>
            <PixelIcon.Sliders />
          </Icon>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            className="flex g-medium-30 align-center"
            onClick={() => router.push("/docs")}
          >
            <Icon fillOpacity={0.6}>
              <PixelIcon.BookOpen />
            </Icon>
            Documentation
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex g-medium-30 align-center">
            <Icon fillOpacity={0.6}>
              <PixelIcon.Message />
            </Icon>
            Feedback
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex g-medium-30 align-center">
            <Icon fillOpacity={0.6}>
              <PixelIcon.User />
            </Icon>
            Community
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex g-medium-30 align-center justify-between"
            radio
          >
            Theme
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
          </DropdownMenu.Item>
          <Divider />
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
