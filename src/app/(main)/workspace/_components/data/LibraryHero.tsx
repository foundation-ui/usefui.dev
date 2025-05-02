"use client";

import React from "react";

import { Editor } from "@/features";
import { Dialog } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function LibraryHero() {
  return (
    <React.Fragment>
      <hgroup className="grid align-center justiy-center m-b-medium-60 ">
        <h1 className="fs-medium-50">Design Tokens Libraries</h1>
        <p className="fs-medium-20 opacity-default-30">
          Manage and Create new Design Tokens libraries.
        </p>
      </hgroup>
      <div
        className="flex g-medium-30 justify-start align-center"
        style={{ flexWrap: "wrap" }}
      >
        <Dialog.Root>
          <Dialog.Trigger sizing="large" variant="secondary">
            <Icon>
              <PixelIcon.Zap />
            </Icon>
            Create new libraries
          </Dialog.Trigger>

          <Editor />
        </Dialog.Root>
      </div>
    </React.Fragment>
  );
}

export default LibraryHero;
