"use client";

import React from "react";
import CopyCode from "./CopyCode";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Button, Tooltip } from "@foundation-ui/components";

function LibraryConsoleActions({ value }: { value: string | null }) {
  return (
    <div className="flex align-end justify-center g-medium-60">
      <CopyCode value={value} />
      <Tooltip content="Download">
        <Button variant="ghost" sizing="medium">
          <Icon>
            <PixelIcon.Download />
          </Icon>
        </Button>
      </Tooltip>
    </div>
  );
}

export default LibraryConsoleActions;
