"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { EmptySection, MaxWidthContainer } from "@/components";
import { Icon } from "@foundation-ui/icons";
import { Button } from "@foundation-ui/components";

function LibraryDetails() {
  const router = useRouter();

  return (
    <section className="w-100 h-100 p-large-10">
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
            <Button variant="ghost" onClick={() => router.push("/")}>
              Back to your library
              <Icon>
                <Icon.NewWindow />
              </Icon>
            </Button>
          }
        />
      </MaxWidthContainer>
    </section>
  );
}

export default LibraryDetails;
