"use client";

import React from "react";

import CopyCode from "./CopyCode";

import { TextMuted } from "@/components/shared/TextMuted";
import { Toolbar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function ConsoleActions({ value }: { value: string | null }) {
  return (
    <div className="flex g-medium-60 align-center">
      <CopyCode value={value} />
      <TextMuted className="opacity-default-10">|</TextMuted>
      <Toolbar.Trigger variant="ghost">
        <Icon>
          <PixelIcon.ChevronsVertical />
        </Icon>
      </Toolbar.Trigger>
    </div>
  );
}

export default ConsoleActions;
