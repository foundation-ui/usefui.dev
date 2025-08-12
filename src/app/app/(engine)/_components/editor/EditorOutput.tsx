"use client";

import React from "react";

import { useEngineStore } from "@/stores";

import EditorBody from "./EditorBody";
import CSSEditor from "./CSSEditor";
import AnalyticsMenu from "../analytics/AnalyticsMenu";
import CopyCode from "../triggers/CopyCode";

import { Page, ScrollArea, Tabs, Tooltip } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const WELCOME_PAYLOAD = {
  ahoy: ["Hello! 👋", "Thank you for trying out Foundation UI ✨"],
  get_started: [
    "1 - Give a name to the library 📦",
    "2 - Customize the values in the left panel 🎨",
    "3 - Click 'Run' to generate design tokens 🏭",
    "4 - Download or copy your library! 🎉",
  ],
  side_quests: [
    "- Check out the live analytics",
    "- Star this project on github",
    "- Join the community",
  ],
  practical_tips: [
    "- Drag the editors handle to resize",
    "- Use CTRL + < to toggle the input console",
  ],
  links: {
    homepage: "https://usefui.dev",
    documentation: "https://usefui.dev/docs/introduction",
    discord: "https://discord.gg/yer3CgTTwD",
    github: "https://github.com/foundation-ui",
  },
};

function EditorOutput() {
  const library = useEngineStore((state) => state.library);
  const clearOutput = useEngineStore((state) => state.clearOutput);

  const disableTrigger = typeof library === typeof null;

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
            <Tabs.Trigger
              className="fs-medium-10"
              value="css-vars"
              disabled={disableTrigger}
              id="css-tabs-trigger"
            >
              CSS
            </Tabs.Trigger>
          </div>
          <div className="flex align-center g-medium-30">
            <Tooltip content="Discard">
              <Tabs.Trigger
                sizing="small"
                variant="ghost"
                value="json"
                onClick={() => clearOutput()}
                disabled={disableTrigger}
              >
                <Icon>
                  <PixelIcon.Redo />
                </Icon>
              </Tabs.Trigger>
            </Tooltip>
            <CopyCode value={library} />
          </div>
        </Page.Navigation>

        <ScrollArea className="h-100" scrollbar>
          <Tabs.Content value="json" className="w-100 h-auto">
            <EditorBody
              key={library}
              value={
                disableTrigger
                  ? JSON.stringify(WELCOME_PAYLOAD, null, 2)
                  : JSON.stringify(JSON.parse(String(library)), null, 2)
              }
              readOnly
              language="json"
            />
          </Tabs.Content>
          <Tabs.Content value="css-vars" className="w-100 h-auto">
            <CSSEditor
              key={library}
              data={JSON.stringify(JSON.parse(String(library)), null, 2)}
            />
          </Tabs.Content>
        </ScrollArea>

        {library && <AnalyticsMenu data={library} />}
      </Tabs>
    </Tabs.Root>
  );
}

export default EditorOutput;
