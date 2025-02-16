"use client";

import React from "react";
import { ColorModeContext } from "@foundation-ui/tokens";
import { Button } from "@foundation-ui/components";
import { Icon } from "..";

function ColorModeActions() {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);

  return (
    <span className="flex align-center g-medium-10">
      <Button
        sizing="small"
        variant={colorMode === "light" ? "mono" : "border"}
        onClick={() => setColorMode("light")}
      >
        <Icon>
          <Icon.Light />
        </Icon>
      </Button>
      <Button
        sizing="small"
        variant={colorMode === "dark" ? "mono" : "border"}
        onClick={() => setColorMode("dark")}
      >
        <Icon>
          <Icon.Dark />
        </Icon>
      </Button>
      <Button
        sizing="small"
        variant={colorMode === "system" ? "mono" : "border"}
        onClick={() => setColorMode("system")}
      >
        <Icon>
          <Icon.Contrast />
        </Icon>
      </Button>
    </span>
  );
}

export default ColorModeActions;
