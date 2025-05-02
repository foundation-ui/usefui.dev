"use client";

import React from "react";

import CopyCode from "./CopyCode";

import { TextMuted } from "@/components/shared/TextMuted";
import { Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function EditorConsoleActions({ value }: { value: string | null }) {
  return (
    <div className="flex g-medium-60 align-center">
      <CopyCode value={value} />
      <TextMuted className="opacity-default-10">|</TextMuted>
      <Tooltip content="Ctrl + <">
        <Toolbar.Trigger variant="ghost">
          <Icon>
            <PixelIcon.ChevronsVertical />
          </Icon>
        </Toolbar.Trigger>
      </Tooltip>
    </div>
  );
}

export default EditorConsoleActions;
