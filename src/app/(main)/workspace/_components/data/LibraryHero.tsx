"use client";

import React from "react";

import { Editor } from "@/features";
import { HeroSubtitle } from "@/components";

import { Dialog } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function LibraryHero() {
  return (
    <React.Fragment>
      <HeroSubtitle>Workspace</HeroSubtitle>
      <Dialog.Root>
        <Dialog.Trigger sizing="large" variant="secondary">
          New library
          <Icon>
            <PixelIcon.Plus />
          </Icon>
        </Dialog.Trigger>

        <Editor />
      </Dialog.Root>
    </React.Fragment>
  );
}

export default LibraryHero;
