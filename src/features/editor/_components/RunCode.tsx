"use client";

import React from "react";

import { Icon } from "@foundation-ui/icons";
import { Button } from "@foundation-ui/components";

function RunCode() {
  return (
    <Button variant="ghost" disabled>
      <span className="fs-medium-10">Run</span>

      <Icon>
        <Icon.Run />
      </Icon>
    </Button>
  );
}

export default RunCode;
