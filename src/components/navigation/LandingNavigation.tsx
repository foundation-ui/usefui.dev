"use client";

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/navigation";

import { BrandIcon, OptionsDropdown } from "@/components";
import { Button, Page } from "@usefui/components";
import { Icon, PixelIcon, SocialIcon } from "@usefui/icons";

const NavWrapper = styled(Page.Navigation)`
  border: none;
  background-color: transparent;

  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(var(--measurement-small-60));
  z-index: var(--depth-default-100);
`;

function Navigation() {
  const router = useRouter();

  return (
    <NavWrapper className="flex justify-between align-center g-medium-30">
      <div className="flex align-center g-medium-40">
        <Button variant="ghost" rawicon onMouseDown={() => router.push("/")}>
          <Icon fill="none" width={29.36} height={29.36} viewBox="0 0 32 48">
            <BrandIcon />
          </Icon>
        </Button>

        <Button variant="ghost" sizing="small">
          Products
        </Button>
        <Button variant="ghost" sizing="small">
          Docs
        </Button>
      </div>

      <div className="flex align-center g-medium-10">
        <Button
          variant="secondary"
          sizing="small"
          animation="reflective"
          onClick={() =>
            window.open(
              "https://github.com/foundation-ui",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <span className="p-y-small-60 flex align-center justify-center">
            <Icon viewBox="0 0 14 14">
              <SocialIcon.Github />
            </Icon>
          </span>
        </Button>
        <Button
          variant="mono"
          sizing="medium"
          animation="reflective"
          className="fs-medium-10"
          onMouseDown={() => router.push("/app")}
        >
          Open app
          <Icon>
            <PixelIcon.Open />
          </Icon>
        </Button>
      </div>
    </NavWrapper>
  );
}

export default Navigation;
