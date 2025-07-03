"use client";

import React from "react";
import { Toolbar, Avatar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function ToolbarTemplate() {
  return (
    <div className="w-100 h-100" style={{ position: "relative" }}>
      <Toolbar.Root>
        <Toolbar side="left" defaultOpen={false} height="auto">
          <Toolbar.Trigger variant="ghost">
            <Avatar style={{ background: "var(--font-color-alpha-10)" }}>
              <Icon fillOpacity={0.3}>
                <PixelIcon.Downasaur />
              </Icon>
            </Avatar>
          </Toolbar.Trigger>
          <Toolbar.Section
            showoncollapse
            className="flex justify-center w-100 h-100 align-center p-t-large-90 p-b-medium-30"
          >
            <Toolbar.Item
              showfirstchild
              className="flex align-center w-100 g-medium-30"
            >
              <Icon>
                <PixelIcon.Link />
              </Icon>
              <p className="fs-medium-10 opacity-default-30">Link</p>
            </Toolbar.Item>
          </Toolbar.Section>
        </Toolbar>
      </Toolbar.Root>
    </div>
  );
}

export default ToolbarTemplate;
