"use client";

import React from "react";
import { Badge, Toggle } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

function ToggleTemplate() {
  const [checkedItem, setCheckedItem] = React.useState<string>("primary");
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60 flex align-center g-medium-10 justify-center">
      <Badge
        variant="border"
        className="flex align-center g-medium-10 justify-center"
      >
        {["primary", "secondary", "tertiary"].map((variant, key) => (
          <Toggle
            key={key}
            variant={variant === checkedItem ? "primary" : "border"}
            value={variant}
            sizing="small"
            onClick={() => setCheckedItem(variant)}
          >
            <Icon>
              {variant === checkedItem ? (
                <Icon.Check />
              ) : (
                <PixelIcon.Downasaur />
              )}
            </Icon>
          </Toggle>
        ))}
      </Badge>
    </div>
  );
}

export default ToggleTemplate;
