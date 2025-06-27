"use client";

import React from "react";

import CopyCode from "../triggers/CopyCode";

import { TextMuted } from "@/components";
import { Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function EditorConsoleActions({ value }: { value: string | null }) {
  return (
    <div className="flex g-medium-60 align-center">
      <CopyCode value={value} />
      <TextMuted className="opacity-default-10">|</TextMuted>
      <Tooltip content="Ctrl + <">
        <Toolbar.Trigger variant="ghost" id="toggle-console-trigger">
          <Icon>
            <PixelIcon.ChevronsVertical />
          </Icon>
        </Toolbar.Trigger>
      </Tooltip>
    </div>
  );
}

export default EditorConsoleActions;
