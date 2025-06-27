"use client";

import React from "react";

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

const DEFAULT_LIBRARY_NAME = "Untitled";

function Engine({
  defaultValue = JSON.stringify(LibraryTemplate.template, null, 4),
  onChange,
  readOnly = false,
}: EditorProps) {
  const [value, setValue] = React.useState<string>(defaultValue);
  const [name, setName] = React.useState<string>(DEFAULT_LIBRARY_NAME);
  const [error, setError] = React.useState<string | null>(null);

  const deferredEditorValue = React.useDeferredValue(value);
  const deferredLibraryName = React.useDeferredValue(name);

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
                  value={deferredEditorValue}
                  defaultValue={defaultValue}
                  setValue={setValue}
                  name={deferredLibraryName}
                  defaultName={DEFAULT_LIBRARY_NAME}
                  setName={setName}
                  error={error}
                  setError={setError}
                  onChange={onChange}
                  readOnly={readOnly}
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
