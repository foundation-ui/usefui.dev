"use client";

import React from "react";

import { SignedOut, SignInButton } from "@clerk/nextjs";

import { Button } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function NavigationLinks() {
  return (
    <div className="flex align-center g-medium-30">
      <SignedOut>
        <SignInButton>
          <Button variant="primary" sizing="small">
            Sign In
            <Icon>
              <PixelIcon.Login />
            </Icon>
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}

export default NavigationLinks;
