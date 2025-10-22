"use client";

import React from "react";
import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";

import { BrandIcon, OptionsDropdown } from "@/components";
import { Breadcrumb, Button, Page } from "@usefui/components";
import { Icon, SocialIcon } from "@usefui/icons";

const NavWrapper = styled(Page.Navigation)`
  border: none;
  background-color: transparent;
`;

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <NavWrapper className="flex justify-between align-center g-medium-30">
      <div className="flex align-center g-medium-40">
        <Button variant="ghost" rawicon onMouseDown={() => router.push("/")}>
          <Icon fill="none" width={29.36} height={29.36} viewBox="0 0 32 48">
            <BrandIcon />
          </Icon>
        </Button>
        <Breadcrumb path={pathname}>
          <Breadcrumb.Item onMouseDown={() => router.push("/")}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="flex align-center g-medium-10">
        <Button
          variant="secondary"
          sizing="medium"
          animation="reflective"
          className="fs-medium-10"
        >
          Feedback
        </Button>
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
        <OptionsDropdown />
      </div>
    </NavWrapper>
  );
}

export default Navigation;
