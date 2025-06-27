"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Avatar, Button, Toolbar, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";

function EditorSidebar() {
  const router = useRouter();

  return (
    <Toolbar.Root>
      <Toolbar side="left" defaultOpen={false}>
        <Toolbar.Section
          className="flex align-start justify-start m-b-medium-70"
          showoncollapse
        >
          <Avatar
            style={{
              background: "var(--font-color)",
              borderRadius: "var(--measurement-medium-30)",
            }}
          >
            <Icon fill="var(--body-color)">
              <SocialIcon.Foundation />
            </Icon>
          </Avatar>
        </Toolbar.Section>

        <Toolbar.Section
          showoncollapse
          className="flex align-start justify-center w-100 p-b-medium-40"
        >
          <div className="grid g-medium-60">
            <Tooltip content="Docs">
              <Button
                variant="ghost"
                sizing="small"
                onClick={() => router.push("/docs")}
              >
                <Icon>
                  <PixelIcon.BookOpen />
                </Icon>
              </Button>
            </Tooltip>
          </div>

          {/* <AppDropdown /> */}
        </Toolbar.Section>
      </Toolbar>
    </Toolbar.Root>
  );
}

export default EditorSidebar;
