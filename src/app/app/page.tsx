"use client";

import React from "react";

import EditorInput from "./_components/editor/EditorInput";
import EditorOutput from "./_components/editor/EditorOutput";

import { Resizable } from "@usefui/components";
import { LibraryTemplate } from "@/templates";

const DEFAULT_VALUE = JSON.stringify(LibraryTemplate.template, null, 2);

function TokenEnginePage() {
  const [value, setValue] = React.useState<string>(DEFAULT_VALUE);
  const [error, setError] = React.useState<string | null>(null);
  const deferredEditorValue = React.useDeferredValue(value);

  return (
    <Resizable
      defaultWidth={33}
      left={
        <EditorInput
          error={error}
          value={deferredEditorValue}
          defaultValue={DEFAULT_VALUE}
          setValue={setValue}
          setError={setError}
          onChange={undefined}
          readOnly={false}
        />
      }
      right={<EditorOutput />}
    />
  );
}

export default TokenEnginePage;
