"use client";

import React from "react";

import CopyCode from "@/features/console/_components/triggers/CopyCode";

import { AppLink, CardBody, GridLayoutSmall } from "@/components";
import { Badge, Button, Divider } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

const WIKI_CATALOG = [
  {
    name: "fui/engine",
    label: "@foundation-ui/core",
    description:
      "Dynamically generate Design Tokens based your application properties",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/core",
  },
  {
    name: "fui/tokens",
    label: "@foundation-ui/tokens",
    description:
      "Use @fui/tokens default Design Tokens library in your application",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/tokens",
  },
  {
    name: "fui/cli",
    label: "@foundation-ui/cli",
    description: "Use @fui/cli to generate your Design Tokens Library",
    link: "https://github.com/foundation-ui/cli",
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
          <h6 className="fs-medium-20  ">Browse docs</h6>
        </span>
        <p className="fs-medium-10 opacity-default-60">
          Explore full capabilities of Foundation UI.
        </p>
      </hgroup>
      <GridLayoutSmall>
        {WIKI_CATALOG.map((wiki) => (
          <CardBody key={wiki.name} className="p-medium-60 grid g-medium-30">
            <hgroup>
              <h6 className="fs-medium-20 m-b-medium-10">{wiki.label}</h6>
              <p className="opacity-default-60 fs-medium-10 m-b-medium-60">
                {wiki.description}
              </p>
              <code>
                <Badge variant="secondary">
                  npm&nbsp;i&nbsp;
                  <b className="m-r-medium-10">{wiki.label}</b>
                  <CopyCode value={`npm i ${wiki.label}`} />
                </Badge>
              </code>
            </hgroup>
            <Divider />
            <footer className="fs-medium-10 flex align-center justify-between g-medium-30">
              <AppLink href={wiki.link} target="_blank">
                Read about @{wiki.name}
                <Icon>
                  <PixelIcon.Open />
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
