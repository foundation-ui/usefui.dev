"use client";

import React from "react";

import EditorInput from "./_components/editor/EditorInput";
import EditorOutput from "./_components/editor/EditorOutput";

import { Resizable } from "@usefui/components";
import { LibraryTemplate } from "@/templates";

interface EditorProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

function TokenEnginePage({
  defaultValue = JSON.stringify(LibraryTemplate.template, null, 2),
  onChange,
}: EditorProps) {
  const [value, setValue] = React.useState<string>(defaultValue);
  const [error, setError] = React.useState<string | null>(null);

  const deferredEditorValue = React.useDeferredValue(value);

  return (
    <Resizable
      defaultWidth={33}
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
  );
}

export default TokenEnginePage;
