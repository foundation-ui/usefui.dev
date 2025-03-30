"use client";

import React from "react";
import styled from "styled-components";

import NavigationLinks from "./_components/NavigationLinks";
import NavigationSearch from "./_components/NavigationSearch";

import { PageMenu } from "@foundation-ui/components";

const NavWrapper = styled(PageMenu)`
  padding-left: 0 !important;
  border: none !important;
`;

function Navigation() {
  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <NavigationSearch />
      <NavigationLinks />
    </NavWrapper>
  );
}

export default Navigation;
