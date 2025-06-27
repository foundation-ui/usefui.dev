"use client";

import React from "react";

import EditorBody from "./EditorBody";
import AnalyticsMenu from "../analytics/AnalyticsMenu";

import CopyCode from "../triggers/CopyCode";

import { TextMuted } from "@/components";
import { Page, Tabs } from "@foundation-ui/components";

function EditorOutput() {
  return (
    <Tabs.Root>
      <Tabs
        defaultOpen="json"
        className="flex w-100 h-100"
        style={{ flexDirection: "column" }}
      >
        <Page.Navigation className="p-y-medium-60 flex align-center justify-between g-medium-30">
          <div className="flex align-center g-medium-30">
            <Tabs.Trigger
              className="fs-medium-10"
              value="json"
              id="json-tabs-trigger"
            >
              JSON
            </Tabs.Trigger>
            <TextMuted className="opacity-default-10">|</TextMuted>
            <Tabs.Trigger
              className="fs-medium-10"
              value="css"
              disabled
              id="css-tabs-trigger"
            >
              CSS
            </Tabs.Trigger>
          </div>
          <CopyCode value="" />
        </Page.Navigation>

        <div className="h-100">
          <Tabs.Content value="json">
            <EditorBody
              value={JSON.stringify(
                {
                  ahoy: [
                    "Hello! 👋",
                    "Thank you for trying out Foundation UI ✨",
                  ],
                  get_started: [
                    "1 - Give a name to the library",
                    "2 - Customize the values in the left panel 🎨",
                    "3 - Click 'Run' to generate design tokens 🏭",
                  ],
                  links: {
                    homepage: "https://usefui.dev",
                    documentation: "https://usefui.dev/docs",
                    discord: "https://discord.gg/yer3CgTTwD",
                    github: "https://github.com/foundation-ui",
                  },
                },
                null,
                4,
              )}
              readOnly
              language="json"
            />
          </Tabs.Content>
          <Tabs.Content value="css">
            <EditorBody
              value={"--css-var: var(--css-value);"}
              readOnly
              language="css"
            />
          </Tabs.Content>
        </div>

        <AnalyticsMenu />
      </Tabs>
    </Tabs.Root>
  );
}

export default EditorOutput;
