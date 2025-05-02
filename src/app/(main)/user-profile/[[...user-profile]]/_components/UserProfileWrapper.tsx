"use client";

import React from "react";

import { UserProfile } from "@clerk/nextjs";
import { MaxWidthContainer } from "@/components";

function UserProfileWrapper() {
  return (
    <section className="w-100 h-100 flex align-center justify-center">
      <MaxWidthContainer className="grid g-medium-60">
        <UserProfile />
      </MaxWidthContainer>
    </section>
  );
}

export default UserProfileWrapper;
