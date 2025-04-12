"use client";

import React from "react";
import SolutionsLinks from "./SolutionsLinks";

import { Button } from "@foundation-ui/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";
import { TextMuted } from "@/components/shared/TextMuted";

function NavigationLinks() {
  return (
    <div className="flex align-center g-medium-30">
      <SolutionsLinks />
      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>
      <Button
        variant="ghost"
        onClick={() =>
          window.open("https://github.com/foundation-ui/token-engine")
        }
      >
        <span className="fs-medium-10">Docs</span>
      </Button>
      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>
      <Button
        variant="ghost"
        onClick={() =>
          window.open("https://github.com/foundation-ui/token-engine")
        }
      >
        <Icon viewBox="0 0 14 14">
          <SocialIcon.Github />
        </Icon>
      </Button>
    </div>
  );
}

export default NavigationLinks;
