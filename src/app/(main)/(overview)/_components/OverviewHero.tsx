"use client";

import React from "react";
import styled from "styled-components";

import Link from "next/link";

import { Button } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

const QUICK_ACTIONS_CATALOG = [
  {
    name: "get-libraries",
    label: "Go to your workspace",
    link: "workspace",
    icon: <PixelIcon.Dashbaord />,
  },
  {
    name: "use-integrations",
    label: "Distribute your libraries",
    link: "integrations",
    icon: <PixelIcon.Cloud />,
  },
  {
    name: "get-history",
    label: "Watch your history",
    link: "integrations",
    icon: <PixelIcon.Script />,
  },
  {
    name: "request-feature",
    label: "Request a new feature",
    link: "feedback",
    icon: <PixelIcon.Message />,
  },
];

const HeroLink = styled(Link)`
  text-decoration: none;
`;

function OverviewHero() {
  return (
    <React.Fragment>
      <hgroup
        style={{ textAlign: "center" }}
        className="grid align-center justiy-center m-b-medium-60"
      >
        <h1 className="fs-large-20">What would you like to do?</h1>
        <p className="fs-medium-20 opacity-default-30">
          Choose from the quick actions below to get started.
        </p>
      </hgroup>
      <div
        className="flex g-medium-30 justify-center align-center"
        style={{ flexWrap: "wrap" }}
      >
        {QUICK_ACTIONS_CATALOG.map((action) => (
          <HeroLink key={action.name} href={`${action.link}`}>
            <Button sizing="medium" variant="secondary">
              <Icon>{action.icon}</Icon>
              {action.label}
            </Button>
          </HeroLink>
        ))}
      </div>
    </React.Fragment>
  );
}

export default OverviewHero;
