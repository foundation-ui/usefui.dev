"use client";

import React from "react";
import { Spinner } from "@usefui/components";

function SpinnerTemplate() {
  return (
    <div className="flex align-center g-medium-60 justify-center p-t-large-30 p-x-medium-60">
      {["small", "medium", "large"].map((size, key) => (
        <Spinner key={key} sizing={size as "small" | "medium" | "large"} />
      ))}
    </div>
  );
}

export default SpinnerTemplate;
