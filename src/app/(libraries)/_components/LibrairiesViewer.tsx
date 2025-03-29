"use client";

import React from "react";
import EmptySection from "@/components/shared/EmptySection";

import { Editor } from "@/features";
import { Icon } from "@/components";
import { Dialog } from "@foundation-ui/components";

function LibrairiesViewer() {
  return (
    <section className="grid w-100 h-100 align-centerr justify-center">
      <EmptySection
        title="No Libraries Found"
        description="Start by creating a new library to interact with resources"
        icon={
          <Icon className="m-y-small-60" fillOpacity={0.3}>
            <Icon.Folders />
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
  );
}

export default LibrairiesViewer;
