"use client";

import React from "react";

import { UserProfile } from "@clerk/nextjs";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { AppLink, MaxWidthContainer } from "@/components";

function UserProfileWrapper() {
  return (
    <section className="w-100 h-100 flex align-center justify-center">
      <MaxWidthContainer className="grid g-medium-60">
        <AppLink href="/" className="fs-medium-20">
          <Icon>
            <PixelIcon.ChevronLeft />
          </Icon>
          Back to Overview
        </AppLink>
        <UserProfile />
      </MaxWidthContainer>
    </section>
  );
}

export default UserProfileWrapper;
