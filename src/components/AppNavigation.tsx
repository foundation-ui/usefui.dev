"use client";

import React from "react";

import { AppDropdown, Breadcrumbs } from "@/components";
import { Button, Page } from "@foundation-ui/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";

function AppNavigation() {
  return (
    <Page.Menu className="flex justify-between align-center">
      <Breadcrumbs />
      <div className="flex align-center g-medium-60">
        <AppDropdown />
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
