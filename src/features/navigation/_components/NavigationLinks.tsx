"use client";

import React from "react";

import { Button } from "@foundation-ui/components";
import { Icon } from "@/components";
import { TextMuted } from "@/components/shared/TextMuted";

function NavigationLinks() {
  return (
    <div className="flex align-center g-medium-30">
      <Button variant="ghost" disabled>
        <span className="fs-medium-10">Components</span>
      </Button>
      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>
      <Button variant="ghost" disabled>
        <span className="fs-medium-10">Analytics</span>
      </Button>
      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>
      <Button variant="ghost" disabled>
        <span className="fs-medium-10">CLI</span>
      </Button>
      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>
      <Button variant="ghost" disabled>
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
          <Icon.Github />
        </Icon>
      </Button>
    </div>
  );
}

export default NavigationLinks;
