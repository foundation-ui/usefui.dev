"use client";

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Avatar, Button } from "@usefui/components";
import { Icon, PixelIcon, SocialIcon } from "@usefui/icons";
import { AppLink } from "@/components";

const FixedNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(var(--measurement-small-60));
  border: var(--measurement-small-30) solid transparent !important;
  background-color: transparent;
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
      link: "/docs/cli",
      label: "CLI",
    },
    {
      link: "/docs/components/installation",
      label: "Components",
    },
    {
      link: "/docs/core/installation",
      label: "Core",
    },
    {
      link: "/docs/uba/installation",
      label: "Analytics",
    },
  ];

  return (
    <FixedNavigation
      className="flex justify-between align-center"
      style={{ alignSelf: "start" }}
    >
      <div className="flex align-center g-medium-30">
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
        <AppLink as={Link} className="fs-medium-10" href="/docs/introduction">
          Docs
        </AppLink>
        <DesktopNavigation className="flex align-center g-small-30">
          <span className="opacity-default-10">|</span>

          {LINKS.map((link, key) => (
            <AppLink
              as={Link}
              key={key}
              className="fs-medium-10"
              href={link.link}
            >
              {link.label}
            </AppLink>
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
            <PixelIcon.ChevronRight />
          </Icon>
        </Button>
      </div>
    </FixedNavigation>
  );
}

export default WebNavigation;
