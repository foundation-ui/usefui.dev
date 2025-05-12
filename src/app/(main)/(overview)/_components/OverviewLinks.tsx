"use client";

import React from "react";

import { AppLink, CardBody, GridLayout, HeroSubtitle } from "@/components";
import { Badge, Divider } from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";

const WIKI_CATALOG = [
  {
    name: "foundation-ui/core",
    description:
      "Dynamically generate design tokens based your application properties.",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/core",
  },
  {
    name: "foundation-ui/tokens",
    description: "Use pre-built design tokens libraries in your application.",
    link: "https://github.com/foundation-ui/design-system/pkgs/npm/tokens",
  },
  {
    name: "foundation-ui/components",
    description:
      "Get fast and accessible components to enhance your UI development.",
    link: "https://github.com/foundation-ui/components",
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

      <GridLayout>
        <CardBody className="grid align-end w-100 p-large-10">
          <div>
            <hgroup>
              <Badge
                variant="border"
                shape="round"
                className="flex align-center g-medium-30 m-b-medium-30"
              >
                <Icon>
                  <PixelIcon.Zap />
                </Icon>
                {WIKI_CATALOG[0]?.name}
              </Badge>

              <HeroSubtitle>{WIKI_CATALOG[0]?.description}</HeroSubtitle>
            </hgroup>
            <Divider className="m-y-medium-60" />
            <footer className="flex align-center justify-between">
              <AppLink
                href={WIKI_CATALOG[0]?.link}
                target="_blank"
                className="fs-medium-10 flex align-center g-medium-30"
              >
                <Icon viewBox="0 0 14 14">
                  <SocialIcon.Github />
                </Icon>
                Read more
              </AppLink>
            </footer>
          </div>
        </CardBody>

        <div className="grid g-medium-30 w-100">
          <CardBody className="grid align-end h-100 w-100 p-large-10">
            <div>
              <hgroup>
                <Badge
                  variant="border"
                  shape="round"
                  className="flex align-center g-medium-30 m-b-medium-30"
                >
                  <Icon>
                    <PixelIcon.BookOpen />
                  </Icon>
                  {WIKI_CATALOG[1]?.name}
                </Badge>
                <HeroSubtitle>{WIKI_CATALOG[1]?.description}</HeroSubtitle>
              </hgroup>
              <Divider className="m-y-medium-60" />
              <footer className="flex align-center justify-between">
                <AppLink
                  href={WIKI_CATALOG[1]?.link}
                  target="_blank"
                  className="fs-medium-10 flex align-center g-medium-30"
                >
                  <Icon viewBox="0 0 14 14">
                    <SocialIcon.Github />
                  </Icon>
                  Read more
                </AppLink>
              </footer>
            </div>
          </CardBody>

          <CardBody className="grid align-end h-100 w-100 p-large-10">
            <div>
              <hgroup>
                <Badge
                  variant="border"
                  shape="round"
                  className="flex align-center g-medium-30 m-b-medium-30"
                >
                  <Icon>
                    <PixelIcon.HumanHandsup />
                  </Icon>
                  {WIKI_CATALOG[2]?.name}
                </Badge>
                <HeroSubtitle>{WIKI_CATALOG[2]?.description}</HeroSubtitle>
              </hgroup>
              <Divider className="m-y-medium-60" />
              <footer className="flex align-center justify-between">
                <AppLink
                  href={WIKI_CATALOG[2]?.link}
                  target="_blank"
                  className="fs-medium-10 flex align-center g-medium-30"
                >
                  <Icon viewBox="0 0 14 14">
                    <SocialIcon.Github />
                  </Icon>
                  Read more
                </AppLink>
              </footer>
            </div>
          </CardBody>
        </div>
      </GridLayout>
    </React.Fragment>
  );
}

export default OverviewLinks;
