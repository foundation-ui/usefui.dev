"use client";

import { Icon } from "@/components";
import { Editor } from "@/features";
import { Badge, Button, Dialog } from "@foundation-ui/components";
import React from "react";

function LibrairiesViewer() {
  return (
    <section className="grid w-100 h-100 align-centerr justify-center">
      <hgroup
        className="flex align-center justify-center"
        style={{ flexDirection: "column", textAlign: "center" }}
      >
        <Badge variant="secondary" className="h-auto m-b-medium-60 ">
          <Icon className="m-y-small-60" fillOpacity={0.3}>
            <Icon.Folders />
          </Icon>
        </Badge>

        <h1 className="fs-medium-20">No Libraries Found</h1>
        <p className="fs-medium-10 opacity-default-30 m-b-medium-60">
          Start by creating a new library to interact with resources.
        </p>

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
      </hgroup>
    </section>
  );
}

export default LibrairiesViewer;
