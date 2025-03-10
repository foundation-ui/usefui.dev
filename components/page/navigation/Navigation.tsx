"use client";

import React from "react";
import styled from "styled-components";

// import { useRouter } from "next/navigation";

import SettingsActions from "@/components/triggers/SettingsActions";

import { Page } from "@foundation-ui/components";

const NavWrapper = styled(Page.Menu)`
  border: none !important;
`;

function Navigation() {
  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <div className="flex align-center g-medium-30">
        <SettingsActions />
      </div>

      <div className="flex align-center g-medium-30">
        <SettingsActions />
      </div>
    </NavWrapper>
  );
}

export default Navigation;
