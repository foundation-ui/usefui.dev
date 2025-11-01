"use client";

import React from "react";
import { Textarea } from "@usefui/components";

function TextareaTemplate() {
  return (
    <div className="grid align-center g-medium-10 justify-center p-t-large-30 p-x-medium-60">
      {["small", "medium", "large"].map((size, key) => (
        <Textarea key={key} sizing={size as "small" | "medium" | "large"} />
      ))}
    </div>
  );
}

export default TextareaTemplate;
