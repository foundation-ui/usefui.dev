"use client";

import React from "react";
import styled from "styled-components";

// import { SignedIn, UserButton } from "@clerk/nextjs";
import { Avatar, Page } from "@foundation-ui/components";
import { SettingsActions } from "@/components";

const NavWrapper = styled(Page.Menu)`
  border: none !important;
`;

function Navigation() {
  return (
    <NavWrapper className="flex justify-end align-center p-r-medium-60">
      <div className="flex align-center g-medium-60">
        <SettingsActions />

        <Avatar
          sizing="small"
          className="fs-medium-10"
          style={{
            background: "var(--font-color)",
            color: "var(--body-color)",
          }}
        >
          JD
        </Avatar>
        {/* <SignedIn>
          <UserButton />
        </SignedIn> */}
      </div>
    </NavWrapper>
  );
}

export default Navigation;
