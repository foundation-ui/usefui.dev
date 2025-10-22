"use client";

import React from "react";

import { OptionsDropdown } from "@/components";
import { Button, Page } from "@usefui/components";
import { Icon, SocialIcon } from "@usefui/icons";

function AppNavigation() {
  return (
    <Page.Menu className="flex justify-between align-center">
      <div className="flex align-center g-medium-60">
        <OptionsDropdown />
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

export default AppNavigation;
