"use client";

import React from "react";

import EditorMenu from "./containers/EditorMenu";
import EditorSidebar from "./containers/EditorSidebar";
import EditorBody from "./containers/EditorBody";
import EditorConsole from "./EditorConsole";

import SplitScreenEditor from "./SplitScreenEditor";

import { LibraryTemplate } from "@/templates";
import { Page, Tabs } from "@foundation-ui/components";
import { AppNavigation, TextMuted } from "@/components";
import CopyCode from "./triggers/CopyCode";

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
              left={
                <div
                  className="flex w-100 h-100"
                  style={{ flexDirection: "column" }}
                >
                  <EditorMenu
                    value={deferredEditorValue}
                    defaultValue={defaultValue}
                    defaultLibraryName={DEFAULT_LIBRARY_NAME}
                    libraryName={deferredLibraryName}
                    setValue={setValue}
                    setName={setName}
                    setError={setError}
                    onChange={onChange}
                  />
                  <EditorBody
                    value={deferredEditorValue}
                    readOnly={readOnly}
                    setValue={setValue}
                    setError={setError}
                    onChange={onChange}
                    language="json"
                  />
                  <EditorConsole
                    mode={error ? "error" : "meta"}
                    value={error}
                  />
                </div>
              }
              right={
                <Tabs.Root>
                  <Tabs defaultOpen="json">
                    <Page.Navigation className="p-y-medium-60 flex align-center justify-between g-medium-30">
                      <div className="flex align-center g-medium-30">
                        <Tabs.Trigger className="fs-medium-10" value="json">
                          JSON
                        </Tabs.Trigger>
                        <TextMuted className="opacity-default-10">|</TextMuted>
                        <Tabs.Trigger className="fs-medium-10" value="css">
                          CSS
                        </Tabs.Trigger>
                      </div>
                      <CopyCode value="" />
                    </Page.Navigation>

                    <div>
                      <Tabs.Content value="json">
                        <EditorBody
                          value={JSON.stringify({ json: true }, null, 4)}
                          readOnly={readOnly}
                          setValue={setValue}
                          setError={setError}
                          onChange={onChange}
                          language="json"
                        />
                      </Tabs.Content>
                      <Tabs.Content value="css">
                        <EditorBody
                          value={"--css-var: var(--css-value);"}
                          readOnly={readOnly}
                          setValue={setValue}
                          setError={setError}
                          onChange={onChange}
                          language="css"
                        />
                      </Tabs.Content>
                    </div>
                  </Tabs>
                </Tabs.Root>
              }
            />
          </Page.Wrapper>
        </div>
      </Page.Wrapper>
    </React.Fragment>
  );
}

export default Engine;
