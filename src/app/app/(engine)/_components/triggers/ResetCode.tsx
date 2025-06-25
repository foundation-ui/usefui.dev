"use client";

import React from "react";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Tooltip, Button } from "@foundation-ui/components";

type ResetCodeProps = {
  resetCallback: () => void;
};

function ResetCode({ resetCallback }: ResetCodeProps) {
  return (
    <Tooltip content="Reset">
      <Button variant="ghost" onClick={resetCallback}>
        <Icon>
          <PixelIcon.Reload />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default ResetCode;
