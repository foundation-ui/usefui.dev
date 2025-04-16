"use client";

import React from "react";
import styled from "styled-components";

import NavigationLinks from "./_components/NavigationLinks";

import { PageMenu } from "@foundation-ui/components";

const NavWrapper = styled(PageMenu)`
  padding-left: 0 !important;
  border: none !important;
`;

function Navigation() {
  return (
    <NavWrapper className="flex justify-end align-center p-r-medium-60">
      <NavigationLinks />
    </NavWrapper>
  );
}

export default Navigation;
