"use client";

import React from "react";

import { useColorMode } from "@foundation-ui/tokens";

import { Button } from "@foundation-ui/components";
import { Icon } from "@/components";

function ColorModeActions() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <span className="flex align-center g-medium-30">
      <Button
        sizing="small"
        variant="ghost"
        rawicon={colorMode === "light"}
        onClick={() => setColorMode("light")}
      >
        <Icon>
          <Icon.Light />
        </Icon>
      </Button>
      <Button
        sizing="small"
        variant="ghost"
        rawicon={colorMode === "dark"}
        onClick={() => setColorMode("dark")}
      >
        <Icon>
          <Icon.Dark />
        </Icon>
      </Button>
      <Button
        sizing="small"
        variant="ghost"
        rawicon={colorMode === "system"}
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
