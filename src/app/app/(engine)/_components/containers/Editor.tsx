"use client";

import React from "react";

import { ScrollArea } from "@foundation-ui/components";

import EditorMenu from "./EditorMenu";
import EditorBody from "./EditorBody";
import EditorConsoleProps from "./EditorConsole";

import { LibraryTemplate } from "@/templates";

interface EditorProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const DEFAULT_LIBRARY_NAME = "Untitled";

function Editor({
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
    <ScrollArea
      className="flex justify-between h-100"
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
      <EditorConsoleProps mode={error ? "error" : "meta"} value={error} />
    </ScrollArea>
  );
}

export default Editor;
