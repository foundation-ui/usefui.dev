"use client";

import React from "react";
import Link from "next/link";

import { EmptySection, MaxWidthContainer } from "@/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function LibraryData() {
  return (
    <MaxWidthContainer className="grid g-medium-30 h-100 align-center justify-center">
      <EmptySection
        title="No Details Available"
        description="Generate Design Tokens to get details."
        icon={
          <Icon width={24} height={24}>
            <PixelIcon.Downasaur />
          </Icon>
        }
        action={
          <Link href="/">
            Back to your library
            <Icon>
              <PixelIcon.ExternalLink />
            </Icon>
          </Link>
        }
      />
    </MaxWidthContainer>
  );
}

export default LibraryData;
