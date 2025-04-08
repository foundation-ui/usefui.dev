"use client";

import React from "react";
import Link from "next/link";

import { EmptySection, MaxWidthContainer } from "@/components";
import { Icon } from "@foundation-ui/icons";

function LibraryData() {
  return (
    <MaxWidthContainer className="grid g-medium-30 h-100 align-center justify-center">
      <EmptySection
        title="No Details Available"
        description="Generate Design Tokens to get details."
        icon={
          <Icon className="m-y-small-60" fillOpacity={0.3}>
            <Icon.Warning />
          </Icon>
        }
        action={
          <Link href="/">
            Back to your library
            <Icon>
              <Icon.NewWindow />
            </Icon>
          </Link>
        }
      />
    </MaxWidthContainer>
  );
}

export default LibraryData;
