"use client";

import React from "react";

import CopyCode from "@/features/console/_components/triggers/CopyCode";

import { AppLink, CardBody, GridLayoutSmall } from "@/components";
import { Badge, Divider } from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";

const WIKI_CATALOG = [
  {
    label: "@foundation-ui/core",
    description:
      "Dynamically generate Design Tokens based your application properties.",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/core",
  },
  {
    label: "@foundation-ui/tokens",
    description:
      "Use @foundation-ui/tokens default Design Tokens library in your application.",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/tokens",
  },
  {
    label: "@foundation-ui/cli",
    description:
      "Use @foundation-ui/cli to generate your Design Tokens Library.",
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
          Explore the full capabilities of Foundation UI.
        </p>
      </hgroup>
      <GridLayoutSmall>
        {WIKI_CATALOG.map((wiki) => (
          <CardBody key={wiki.label} className="p-medium-60 grid g-medium-30">
            <hgroup>
              <p className="fs-medium-10 opacity-default-60 m-b-medium-10">
                {wiki.label}
              </p>
              <h6 className="fs-medium-10">{wiki.description}</h6>
            </hgroup>
            <Divider className="m-y-medium-60" />

            <footer className="flex align-center justify-between">
              <Badge variant="secondary">
                npm&nbsp;i&nbsp;
                <b className="m-r-medium-10">{wiki.label}</b>
                <CopyCode value={`npm i ${wiki.label}`} />
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
