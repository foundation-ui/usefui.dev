"use client";

import React from "react";

import EditorMenu from "./containers/EditorMenu";
import EditorBody from "./containers/EditorBody";
import EditorConsoleProps from "./EditorConsole";

import { LibraryTemplate } from "@/templates";

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
    </React.Fragment>
  );
}

export default Engine;
