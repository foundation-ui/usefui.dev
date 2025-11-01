"use client";

import React from "react";
import { Button } from "@usefui/components";

function ButtonTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <div className="flex flex-wrap align-center g-medium-10 justify-center">
        {[
          "primary",
          "danger",
          "warning",
          "secondary",
          "tertiary",
          "mono",
          "border",
          "ghost",
        ].map((variant, key) => (
          <Button key={key} variant={variant as "primary"}>
            @usefui
          </Button>
        ))}
      </div>
      <div className="flex align-center g-medium-10 justify-center">
        {["round", "smooth", "square"].map((shape, key) => (
          <Button key={key} sizing="medium" shape={shape as "smooth"}>
            @usefui
          </Button>
        ))}
      </div>
      <div className="flex align-center g-medium-10 justify-center">
        {["small", "medium", "large"].map((size, key) => (
          <Button key={key} sizing={size as "small" | "medium" | "large"}>
            @usefui
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap align-center g-medium-10 justify-center">
        {["primary", "secondary", "tertiary", "mono", "border"].map(
          (variant, key) => (
            <Button
              key={key}
              animation="reflective"
              variant={variant as "primary"}
            >
              @usefui
            </Button>
          ),
        )}
      </div>
    </div>
  );
}

export default ButtonTemplate;
