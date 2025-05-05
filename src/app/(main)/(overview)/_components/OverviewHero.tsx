"use client";

import React from "react";
import styled from "styled-components";

import { useAuth } from "@clerk/nextjs";

import Link from "next/link";

import { Editor } from "@/features";
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

const HeroLink = styled(Link)`
  text-decoration: none;
`;

function AnimatedHumanIcon({ interval }: { interval?: number }) {
  const [showHandsUp, setShowHandsUp] = React.useState<boolean>(true);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setShowHandsUp((prev) => !prev),
      interval ?? 500,
    );

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <Icon width={24} height={24}>
      {showHandsUp ? <PixelIcon.HumanHandsup /> : <PixelIcon.HumanHandsdown />}
    </Icon>
  );
}

function OverviewHero() {
  const { isSignedIn } = useAuth();

  return (
    <React.Fragment>
      <hgroup className="grid align-center justiy-center m-b-medium-60">
        <h1 className="fs-medium-50">
          {isSignedIn ? (
            <span className="flex align-center g-medium-30">
              Welcome back!
              <AnimatedHumanIcon />
            </span>
          ) : (
            "Overview"
          )}
        </h1>
        <p className="fs-medium-20 opacity-default-30">
          Choose from the quick actions below to get started.
        </p>
      </hgroup>
      <div
        className="flex g-medium-30 justify-start align-center"
        style={{ flexWrap: "wrap" }}
      >
        <Dialog.Root>
          <Dialog.Trigger sizing="large" variant="secondary">
            <Icon>
              <PixelIcon.Zap />
            </Icon>
            Create new libraries
          </Dialog.Trigger>

          <Editor />
        </Dialog.Root>
        {QUICK_ACTIONS_CATALOG.map((action) => (
          <HeroLink key={action.name} href={`${action.link}`}>
            <Button sizing="large" variant="secondary">
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
