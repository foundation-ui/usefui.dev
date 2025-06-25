"use client";

import React from "react";

import { useColorMode } from "@foundation-ui/tokens";

import { Breadcrumbs } from "@/components";
import { Button, Page } from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";

function DocsNavigation() {
  const { colorMode, setColorMode } = useColorMode();
  const nextColorMode = colorMode === "light" ? "dark" : "light";

  return (
    <Page.Menu className="p-r-medium-60 flex justify-between align-center">
      <Breadcrumbs />
      <div className="flex align-center g-medium-60">
        <Button
          variant="ghost"
          sizing="small"
          onClick={() => setColorMode(nextColorMode)}
        >
          <Icon>
            {colorMode === "light" && <PixelIcon.Moon />}
            {colorMode === "dark" && <PixelIcon.SunAlt />}
          </Icon>
        </Button>
        <span className="opacity-default-10">|</span>

        <Button
          variant="ghost"
          onClick={() =>
            window.open(
              "https://github.com/foundation-ui",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <Icon viewBox="0 0 14 14">
            <SocialIcon.Github />
          </Icon>
        </Button>
      </div>
    </Page.Menu>
  );
}

export default DocsNavigation;
