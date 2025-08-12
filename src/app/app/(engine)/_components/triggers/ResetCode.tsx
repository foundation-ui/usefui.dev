"use client";

import React from "react";

import { Icon, PixelIcon } from "@usefui/icons";
import { Tooltip, Button } from "@usefui/components";

type ResetCodeProps = {
  resetCallback: () => void;
};

function ResetCode({ resetCallback }: ResetCodeProps) {
  return (
    <Tooltip content="Reset">
      <Button variant="ghost" onClick={resetCallback} id="reset-code-trigger">
        <Icon>
          <PixelIcon.Reload />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default ResetCode;
