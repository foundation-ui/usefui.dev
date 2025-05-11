"use client";

import React from "react";

import { Editor } from "@/features";
import { HeroHeading, HeroLink, HeroTitle } from "@/components";

import { Button, Dialog } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

const QUICK_ACTIONS_CATALOG = [
  {
    name: "get-libraries",
    label: "Go to your workspace",
    link: "workspace",
    icon: <PixelIcon.Dashbaord />,
  },
];

function OverviewHero() {
  return (
    <section className="grid align-center justify-center g-medium-60 p-y-large-30">
      <HeroHeading className="grid align-center justiy-center">
        <HeroTitle>Build the Design Tokens your Applications needs.</HeroTitle>
      </HeroHeading>

      <div
        className="flex g-medium-10 justify-center align-center"
        style={{ flexWrap: "wrap" }}
      >
        <Dialog.Root>
          <Dialog.Trigger sizing="large" variant="primary">
            <Icon>
              <PixelIcon.Zap />
            </Icon>
            Create new libraries
          </Dialog.Trigger>

          <Editor />
        </Dialog.Root>

        {QUICK_ACTIONS_CATALOG.map((action) => (
          <HeroLink key={action.name} href={`${action.link}`}>
            <Button sizing="large" variant="primary">
              <Icon>{action.icon}</Icon>
              {action.label}
            </Button>
          </HeroLink>
        ))}
      </div>
    </section>
  );
}

export default OverviewHero;
