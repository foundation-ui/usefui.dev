"use client";

import React from "react";

import { TextMuted } from "@/components";
import { Toolbar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function AnalyticsMenu({ size }: { size?: number }) {
  return (
    <Toolbar.Root>
      <Toolbar side="bottom" defaultOpen={false}>
        <Toolbar.Section showoncollapse className="p-medium-30">
          <span className="flex align-center g-medium-10">
            <Icon fillOpacity={0.1}>
              <PixelIcon.File />
            </Icon>
            <TextMuted className="fs-medium-10 opacity-default-10 p-y-small-50">
              {size ?? 0}&nbsp;Kb
            </TextMuted>
          </span>
        </Toolbar.Section>
      </Toolbar>
    </Toolbar.Root>
  );
}

export default AnalyticsMenu;
