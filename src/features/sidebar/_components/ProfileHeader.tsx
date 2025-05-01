"use client";

import React from "react";
import { useUser, SignedIn, SignedOut } from "@clerk/nextjs";
import { TextLimiter } from "@/components";

function ProfileHeader() {
  const { user } = useUser();

  return (
    <hgroup className="p-medium-30">
      <SignedOut>
        <p className="fs-medium-20 opacity-default-60">You&apos;re Incognito</p>
        <p className="fs-medium-10 opacity-default-30">
          Sign in to get started&nbsp;<b>for free</b>
        </p>
      </SignedOut>
      <SignedIn>
        <p className="fs-medium-10 opacity-default-30">Signed in as</p>
        <TextLimiter>
          <p className="fs-medium-20 opacity-default-60">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </TextLimiter>
      </SignedIn>
    </hgroup>
  );
}
export default ProfileHeader;
