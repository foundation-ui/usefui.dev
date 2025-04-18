"use client";

import React from "react";
import styled from "styled-components";

import { usePathname } from "next/navigation";

import NavigationLinks from "./_components/NavigationLinks";
import { PageMenu } from "@foundation-ui/components";

const NavWrapper = styled(PageMenu)`
  padding-left: 0 !important;
  border: none !important;
`;
const CurrentRouteLabel = styled.h6`
  text-transform: capitalize;
  letter-spacing: -0.7px;
`;

function Navigation() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Split the pathname into segments and remove empty strings

  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <CurrentRouteLabel className="fs-medium-20">
        {segments.at(0)}
      </CurrentRouteLabel>

      <NavigationLinks />
    </NavWrapper>
  );
}

export default Navigation;
