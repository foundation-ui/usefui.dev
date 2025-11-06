"use client";

import React from "react";

import { Icon } from "@usefui/icons";
import { Tooltip, Button } from "@usefui/components";

type ResetCodeProps = {
  resetCallback: () => void;
};

function ResetCode({ resetCallback }: ResetCodeProps) {
  return (
    <Tooltip content="Reset">
      <Button
        variant="secondary"
        sizing="small"
        animation="reflective"
        onClick={resetCallback}
        id="reset-code-trigger"
      >
        <span className="p-y-small-60 flex align-center justify-center">
          <Icon>
            <Icon.Reload />
          </Icon>
        </span>
      </Button>
    </Tooltip>
  );
}

export default ResetCode;
