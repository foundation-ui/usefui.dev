"use client";

import React from "react";

import { Editor } from "@/features";
import { HeroSubtitle } from "@/components";

import { Dialog } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function LibraryHero() {
  return (
    <section className="grid g-medium-60">
      <hgroup className="grid align-start justiy-start">
        <HeroSubtitle className="m-b-medium-10">
          Design Tokens Libraries
        </HeroSubtitle>
        <p className="fs-medium-20 opacity-default-30 m-b-medium-60 ">
          Manage and Create new Design Tokens libraries.
        </p>

        <Dialog.Root>
          <Dialog.Trigger sizing="large" variant="primary">
            <Icon>
              <PixelIcon.Zap />
            </Icon>
            Create new libraries
          </Dialog.Trigger>

          <Editor />
        </Dialog.Root>
      </hgroup>
    </section>
  );
}

export default LibraryHero;
