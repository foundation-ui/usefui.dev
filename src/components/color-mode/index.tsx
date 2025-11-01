"use client";

import { useColorMode } from "@usefui/tokens";

import { Button, Tooltip } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

function ColorModes() {
  const { setColorMode } = useColorMode();

  return (
    <div className="flex align-center g-medium-30 p-y-small-30">
      <Tooltip content="Light">
        <Button variant="ghost" onClick={() => setColorMode("light")}>
          <Icon>
            <PixelIcon.SunAlt />
          </Icon>
        </Button>
      </Tooltip>
      <Tooltip content="Dark">
        <Button variant="ghost" onClick={() => setColorMode("dark")}>
          <Icon>
            <PixelIcon.Moon />
          </Icon>
        </Button>
      </Tooltip>
      <Tooltip content="System">
        <Button variant="ghost" onClick={() => setColorMode("system")}>
          <Icon>
            <PixelIcon.Contrast />
          </Icon>
        </Button>
      </Tooltip>
    </div>
  );
}

export default ColorModes;
