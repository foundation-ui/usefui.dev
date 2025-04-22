"use client";

import React from "react";
import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";

import NavigationLinks from "./_components/NavigationLinks";

import { Button, PageMenu, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

const NavWrapper = styled(PageMenu)`
  padding-left: 0 !important;
  border: none !important;
`;
const CurrentRouteLabel = styled.h6`
  text-transform: capitalize;
  letter-spacing: -0.7px;
`;

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Split the pathname into segments and remove empty strings

  const emptySegment = segments.at(0) === undefined;

  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <div className="flex align-center g-medium-30">
        {!emptySegment && (
          <Tooltip content="Go Back">
            <Button variant="ghost" onClick={() => router.back()}>
              <Icon>
                <PixelIcon.ChevronLeft />
              </Icon>
            </Button>
          </Tooltip>
        )}
        <CurrentRouteLabel className="fs-medium-20">
          {segments.at(0)}
        </CurrentRouteLabel>
      </div>

      <NavigationLinks />
    </NavWrapper>
  );
}

export default Navigation;
