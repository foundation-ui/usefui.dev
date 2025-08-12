"use client";

import React from "react";
import { Checkbox } from "@usefui/components";

function CheckboxTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <div className="flex align-center g-medium-10 justify-center">
        {["primary", "mono", "border", "ghost"].map((variant, key) => (
          <Checkbox.Root key={key}>
            <Checkbox
              key={key}
              defaultChecked
              variant={variant as "primary" | "mono" | "border" | "ghost"}
            >
              <Checkbox.Indicator />
            </Checkbox>
          </Checkbox.Root>
        ))}
      </div>
      <div className="flex align-center g-medium-10 justify-center">
        {["small", "medium", "large"].map((size, key) => (
          <Checkbox.Root key={key}>
            <Checkbox sizing={size as "small" | "medium" | "large"}>
              <Checkbox.Indicator />
            </Checkbox>
          </Checkbox.Root>
        ))}
      </div>
    </div>
  );
}

export default CheckboxTemplate;
