"use client";

import React from "react";

import { UserProfile } from "@clerk/nextjs";
import { MaxWidthContainer } from "@/components";

function UserProfileWrapper() {
  return (
    <MaxWidthContainer className="grid g-medium-60 p-y-medium-60">
      <UserProfile />
    </MaxWidthContainer>
  );
}

export default UserProfileWrapper;
