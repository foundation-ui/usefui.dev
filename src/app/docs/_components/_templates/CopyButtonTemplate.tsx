"use client";

import React from "react";
import { CopyButton } from "@usefui/components";

function CopyButtonTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60 align-center justify-center">
      <CopyButton variant="border" sizing="medium" value="Hello, world!">
        Click to copy
      </CopyButton>
    </div>
  );
}

export default CopyButtonTemplate;
