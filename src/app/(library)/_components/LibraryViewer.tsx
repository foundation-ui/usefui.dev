"use client";

import React from "react";

import LibraryCard from "./LibraryCard";

// import { Editor } from "@/features";
import {
  // EmptySection,
  MaxWidthContainer,
} from "@/components";

// import { Icon } from "@foundation-ui/icons";
// import { Dialog } from "@foundation-ui/components";

function LibraryViewer() {
  return (
    <section className="w-100 h-100 p-large-10">
      <MaxWidthContainer className="grid g-medium-30">
        {Array.from(Array(5).keys()).map((n, key) => (
          <LibraryCard
            key={key}
            restricted={[1, 3].includes(n)}
            title="Acme Web/Desktop"
            description="Design Tokens Library used for Acme Web and Desktop Apps"
            lastUpdateAt="Updated 2 days ago"
            lastUpdateId="~q2a9Zh5nsLk..."
          />
        ))}
      </MaxWidthContainer>
      {/* <div className="grid w-100 h-100 align-centerr justify-center">
        <EmptySection
          title="No Design Tokens Found"
          description="Start by creating a new library to interact with Design Tokens."
          icon={
            <Icon className="m-y-small-60" fillOpacity={0.3}>
              <Icon.Models />
            </Icon>
          }
          action={
            <Dialog.Root>
              <Dialog.Trigger
                variant="primary"
                sizing="medium"
                style={{ color: "var(--body-color)!important" }}
              >
                Open Editor
              </Dialog.Trigger>
              <Editor />
            </Dialog.Root>
          }
        />
      </div> */}
    </section>
  );
}

export default LibraryViewer;
