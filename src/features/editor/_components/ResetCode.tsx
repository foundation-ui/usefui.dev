"use client";

import React from "react";

import { Icon } from "@foundation-ui/icons";
import { Tooltip, Button } from "@foundation-ui/components";

type ResetCodeProps = {
  resetCallback: () => void;
};

function ResetCode({ resetCallback }: ResetCodeProps) {
  return (
    <Tooltip content="Reset">
      <Button variant="ghost" onClick={resetCallback}>
        <Icon>
          <Icon.Reload />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default ResetCode;
