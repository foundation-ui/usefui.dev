"use client";

import React from "react";
import { Badge } from "@usefui/components";

function BadgeTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <div className="flex align-center g-medium-10 justify-center">
        {[
          "primary",
          "secondary",
          "border",
          "error",
          "warning",
          "success",
          "meta",
        ].map((variant, key) => (
          <Badge
            key={key}
            variant={
              variant as
                | "primary"
                | "secondary"
                | "border"
                | "error"
                | "warning"
                | "success"
                | "meta"
            }
          >
            @fui
          </Badge>
        ))}
      </div>
      <div className="flex align-center g-medium-10 justify-center">
        {["square", "smooth", "round"].map((shape, key) => (
          <Badge key={key} shape={shape as "square" | "smooth" | "round"}>
            @fui
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default BadgeTemplate;
