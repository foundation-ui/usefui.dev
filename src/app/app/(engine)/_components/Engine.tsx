"use client";

import React from "react";

// import { useBehaviorAnalytics } from "@foundation-ui/core";

import EditorSidebar from "./editor/EditorSidebar";
import SplitScreenEditor from "./editor/SplitScreenEditor";
import EditorInput from "./editor/EditorInput";
import EditorOutput from "./editor/EditorOutput";

import { LibraryTemplate } from "@/templates";
import { AppNavigation } from "@/components";
import { Page } from "@foundation-ui/components";

interface EditorProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

function Engine({
  defaultValue = JSON.stringify(LibraryTemplate.template, null, 2),
  onChange,
}: EditorProps) {
  // const uba = useBehaviorAnalytics({
  //   silent: false,
  //   flags: [
  //     "run-code-trigger",
  //     "copy-code-trigger",
  //     "reset-code-trigger",
  //     "format-code-trigger",
  //     "toggle-console-trigger",
  //     "console-indicator",
  //     "json-tabs-trigger",
  //     "css-tabs-trigger",
  //     "library-name-field",
  //     "drag-handle",
  //   ],
  // });

  const [value, setValue] = React.useState<string>(defaultValue);
  const [error, setError] = React.useState<string | null>(null);

  const deferredEditorValue = React.useDeferredValue(value);

  return (
    <React.Fragment>
      <Page.Wrapper className="flex" $navigations={0} $menus={0}>
        <EditorSidebar />
        <div className="h-100 w-100">
          <AppNavigation />

          <Page.Wrapper $navigations={0} $menus={1.07}>
            <SplitScreenEditor
              defaultWidth={50}
              left={
                <EditorInput
                  error={error}
                  value={deferredEditorValue}
                  defaultValue={defaultValue}
                  setValue={setValue}
                  setError={setError}
                  onChange={onChange}
                />
              }
              right={<EditorOutput />}
            />
          </Page.Wrapper>
        </div>
      </Page.Wrapper>
    </React.Fragment>
  );
}

export default Engine;
