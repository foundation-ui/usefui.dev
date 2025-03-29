"use client";

import React from "react";

import SearchAction from "./SearchAction";
import EmptySection from "@/components/shared/EmptySection";

import { Editor } from "@/features";
import { Icon } from "@foundation-ui/icons";
import { Dialog } from "@foundation-ui/components";

function LibraryViewer() {
  return (
    <React.Fragment>
      <SearchAction />

      <section className="grid w-100 h-90 align-centerr justify-center">
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
      </section>
    </React.Fragment>
  );
}

export default LibraryViewer;
