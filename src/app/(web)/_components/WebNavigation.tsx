"use client";

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/navigation";
import { useColorMode } from "@foundation-ui/tokens";

import { Avatar, Button } from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";

const FixedNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  border: var(--measurement-small-30) solid transparent;
  background-color: var(--body-color);
  padding: var(--measurement-medium-30);
  z-index: var(--depth-default-100);
`;
const DesktopNavigation = styled.div`
  @media (max-width: 768px) {
    display: none !important;
  }
`;

function WebNavigation() {
  const router = useRouter();
  const LINKS = [
    {
      link: "docs/components",
      label: "Components",
    },
    {
      link: "docs/core",
      label: "Core",
    },
    {
      link: "docs/analytics",
      label: "Analytics",
    },
  ];

  return (
    <FixedNavigation
      className="flex justify-between align-center"
      style={{ alignSelf: "start" }}
    >
      <div className="flex align-center g-medium-60">
        <Avatar
          style={{
            background: "var(--font-color)",
            borderRadius: "var(--measurement-medium-30)",
          }}
        >
          <Icon fill="var(--body-color)">
            <SocialIcon.Foundation />
          </Icon>
        </Avatar>
        <Button
          variant="ghost"
          sizing="small"
          onClick={() => router.push("docs")}
        >
          Docs
        </Button>
        <DesktopNavigation className="flex align-center g-medium-60">
          <span className="opacity-default-10">|</span>
          {LINKS.map((link, key) => (
            <Button
              key={key}
              variant="ghost"
              sizing="small"
              onClick={() => router.push(link.link)}
            >
              {link.label}
            </Button>
          ))}
        </DesktopNavigation>
      </div>

      <div className="flex align-center g-medium-60">
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
        <Button
          variant="border"
          sizing="large"
          onClick={() => router.push("/app")}
        >
          Go to App
          <Icon>
            <PixelIcon.ArrowRight />
          </Icon>
        </Button>
      </div>
    </FixedNavigation>
  );
}

export default WebNavigation;
