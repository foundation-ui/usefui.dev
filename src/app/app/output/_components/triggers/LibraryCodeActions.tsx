"use client";

import React from "react";
import CopyCode from "@/app/app/(engine)/_components/console/_components/triggers/CopyCode";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Button, Tooltip } from "@foundation-ui/components";

function LibraryCodeActions({ value }: { value: string | null }) {
  return (
    <div className="flex align-end justify-end g-medium-60">
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

export default LibraryCodeActions;
