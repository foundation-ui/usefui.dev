"use client";

import React from "react";

import CopyCode from "@/features/console/_components/triggers/CopyCode";

import { AppLink, CardBody, GridLayoutSmall } from "@/components";
import { Badge, Divider } from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";

const WIKI_CATALOG = [
  {
    name: "@foundation-ui/tokens",
    label: "Core",
    description:
      "Dynamically generate Design Tokens based your application properties.",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/core",
  },
  {
    name: "@foundation-ui/tokens",
    label: "Tokens",
    description:
      "Use @foundation-ui/tokens default Design Tokens library in your application.",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/tokens",
  },
  {
    name: "@foundation-ui/tokens",
    label: "Components",
    description:
      "Use @foundation-ui/cli to generate your Design Tokens Library.",
    link: "https://github.com/foundation-ui/components",
  },
  {
    name: "@foundation-ui/tokens",
    label: "Hooks",
    description:
      "Use @foundation-ui/cli to generate your Design Tokens Library.",
    link: "https://github.com/foundation-ui/hooks",
  },
  {
    name: "@foundation-ui/tokens",
    label: "Analytics",
    description:
      "Use @foundation-ui/cli to generate your Design Tokens Library.",
    link: "https://github.com/foundation-ui/analytics",
  },
];

function OverviewLinks() {
  return (
    <React.Fragment>
      <hgroup className="m-b-medium-60">
        <span className="flex align-center g-medium-10">
          <Icon>
            <PixelIcon.BookOpen />
          </Icon>
          <h6 className="fs-medium-20  ">Browse solutions</h6>
        </span>
        <p className="fs-medium-10 opacity-default-60">
          Explore the full capabilities of Foundation UI.
        </p>
      </hgroup>
      <GridLayoutSmall>
        {WIKI_CATALOG.map((wiki, key) => (
          <CardBody key={key} className="p-large-10 grid g-medium-30">
            <hgroup>
              <h6 className="m-b-medium-10">{wiki.label}</h6>

              <p className="fs-medium-10 opacity-default-60">
                {wiki.description}
              </p>
            </hgroup>
            <Divider className="m-y-medium-30" />

            <footer className="flex align-center justify-between">
              <Badge variant="secondary">
                npm&nbsp;i&nbsp;
                <b className="m-r-medium-10">{wiki.name}</b>
                <CopyCode value={`npm i ${wiki.name}`} />
              </Badge>
              <AppLink href={wiki.link} target="_blank">
                <Icon viewBox="0 0 14 14">
                  <SocialIcon.Github />
                </Icon>
              </AppLink>
            </footer>
          </CardBody>
        ))}
      </GridLayoutSmall>
    </React.Fragment>
  );
}

export default OverviewLinks;
