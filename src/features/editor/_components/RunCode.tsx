"use client";

import React from "react";

import { Icon } from "@/components";
import { Tooltip, Button } from "@foundation-ui/components";

function RunCode() {
  return (
    <Tooltip content="Run">
      <Button variant="ghost" disabled>
        <Icon>
          <Icon.Run />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default RunCode;
