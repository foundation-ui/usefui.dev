"use client";

import React from "react";

import { Switch } from "@usefui/components";

function SwitchTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <div className="flex align-center g-medium-10 justify-center">
        {["primary", "secondary", "ghost"].map((variant, key) => (
          <Switch.Root key={key}>
            <Switch variant={variant as "primary" | "secondary" | "ghost"}>
              <Switch.Thumb />
            </Switch>
          </Switch.Root>
        ))}
      </div>
      <div className="flex align-center g-medium-10 justify-center">
        {["small", "medium", "large"].map((size, key) => (
          <Switch.Root key={key}>
            <Switch
              sizing={size as "small" | "medium" | "large"}
              variant="ghost"
            >
              <Switch.Thumb />
            </Switch>
          </Switch.Root>
        ))}
      </div>
    </div>
  );
}

export default SwitchTemplate;
