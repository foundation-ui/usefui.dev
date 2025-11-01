"use client";

import React from "react";
import { Avatar, Tooltip } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

function TooltipTemplate() {
  return (
    <div className="flex g-medium-30 p-t-large-30 p-x-medium-60 flex align-center g-medium-10 justify-center">
      <Tooltip content="Connected">
        <Avatar
          status="online"
          style={{ background: "var(--font-color-alpha-10)" }}
        />
      </Tooltip>
      <Tooltip content="Busy">
        <Avatar
          status="busy"
          style={{ background: "var(--font-color-alpha-10)" }}
        >
          <Icon fillOpacity={0.3}>
            <PixelIcon.Downasaur />
          </Icon>
        </Avatar>
      </Tooltip>
    </div>
  );
}

export default TooltipTemplate;
