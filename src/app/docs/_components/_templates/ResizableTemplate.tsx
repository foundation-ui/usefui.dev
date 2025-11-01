"use client";

import React from "react";

import { Resizable } from "@usefui/components";

function ResizableTemplate() {
  return (
    <div className="p-medium-60">
      <Resizable
        left={
          <div
            className="h-100 w-100 flex align-center justify-center"
            style={{ borderRight: "1px solid var(--font-color-alpha-10)" }}
          >
            <p className="fs-medium-20">One</p>
          </div>
        }
        right={
          <div className="h-100 w-100 flex align-center justify-center">
            <p className="fs-medium-20">Two</p>
          </div>
        }
      />
    </div>
  );
}

export default ResizableTemplate;
