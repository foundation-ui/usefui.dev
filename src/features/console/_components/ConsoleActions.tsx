"use client";

import React from "react";

import CopyCode from "./CopyCode";

import { TextMuted } from "@/components/shared/TextMuted";
import { Toolbar } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

function ConsoleActions({ value }: { value: string | null }) {
  return (
    <div className="flex align-center g-medium-30">
      <CopyCode value={value} />

      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>

      <Toolbar.Trigger variant="ghost">
        <Icon>
          <Icon.DoubleChevron />
        </Icon>
      </Toolbar.Trigger>
    </div>
  );
}

export default ConsoleActions;
