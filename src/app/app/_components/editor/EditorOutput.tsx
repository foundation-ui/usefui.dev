"use client";

import React from "react";
import styled from "styled-components";

import { useEngineStore } from "@/stores";

import CSSEditor from "./CSSEditor";
import AnalyticsMeta from "../data/AnalyticsMeta";

import {
  CopyButton,
  Page,
  ScrollArea,
  Tabs,
  Tooltip,
} from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";
import { CodeEditor } from "@/components";

const WELCOME_PAYLOAD = {
  ahoy: ["Hello! 👋", "Thank you for trying out Foundation UI ✨"],
  get_started: [
    "1 - Give a name to the library 📦",
    "2 - Customize the values in the left panel 🎨",
    "3 - Click 'Run' to generate design tokens 🏭",
    "4 - Download or copy your library! 🎉",
  ],
  // side_quests: [
  //   "- Check out the live analytics",
  //   "- Star this project on github",
  //   "- Join the community",
  // ],
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

const OutputWrapper = styled(ScrollArea)`
  background: var(--contrast-color);
`;
const OutputNavigation = styled(Page.Navigation)`
  box-shadow: 0 0 var(--measurement-medium-50) var(--measurement-medium-10)
    var(--contrast-color);
  background-color: transparent !important;
  border: none;
  z-index: var(--depth-default-90);
`;

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
        <OutputNavigation className="p-y-medium-60 flex align-center justify-between g-medium-30">
          <div className="flex align-center g-medium-30">
            <Tabs.Trigger
              variant="ghost"
              className="fs-small-50"
              value="json"
              id="json-tabs-trigger"
            >
              JSON
            </Tabs.Trigger>
            <Tabs.Trigger
              variant="ghost"
              className="fs-small-50"
              value="css-vars"
              disabled={disableTrigger}
              id="css-tabs-trigger"
            >
              CSS
            </Tabs.Trigger>
          </div>
          <div className="flex align-center g-medium-10">
            <CopyButton
              value={String(library)}
              variant="secondary"
              sizing="small"
              animation="reflective"
            >
              <span className="p-y-small-60 flex align-center justify-center">
                <Icon>
                  <PixelIcon.Clipboard />
                </Icon>
              </span>
            </CopyButton>
            <Tooltip content="Discard">
              <Tabs.Trigger
                variant="secondary"
                sizing="small"
                animation="reflective"
                value="json"
                onClick={() => clearOutput()}
                disabled={disableTrigger}
              >
                <span className="p-y-small-60 flex align-center justify-center">
                  <Icon>
                    <PixelIcon.Redo />
                  </Icon>
                </span>
              </Tabs.Trigger>
            </Tooltip>
          </div>
        </OutputNavigation>

        <OutputWrapper className="h-100" scrollbar>
          <Tabs.Content value="json" className="w-100 h-auto">
            <CodeEditor
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
        </OutputWrapper>

        {library && <AnalyticsMeta data={library} />}
      </Tabs>
    </Tabs.Root>
  );
}

export default EditorOutput;
