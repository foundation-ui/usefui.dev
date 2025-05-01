"use client";

import React from "react";
import styled from "styled-components";

import { useUser, SignedIn, SignedOut } from "@clerk/nextjs";

import { Avatar } from "@foundation-ui/components";
import { Icon, WebIcon } from "@foundation-ui/icons";

const AvatarXSmall = styled(Avatar)`
  background: var(--font-color-alpha-10) !important;

  max-width: var(--measurement-medium-60) !important;
  max-height: var(--measurement-medium-60) !important;
`;

function ProfileAvatar() {
  const { user } = useUser();

  return (
    <React.Fragment>
      <SignedOut>
        <AvatarXSmall sizing="small">
          <Icon viewBox="0 0 24 24" height={32} width={32} fillOpacity={0.3}>
            <WebIcon.Incognito />
          </Icon>
        </AvatarXSmall>
      </SignedOut>
      <SignedIn>
        <AvatarXSmall sizing="small" src={user?.imageUrl} />
      </SignedIn>
    </React.Fragment>
  );
}

export default ProfileAvatar;
