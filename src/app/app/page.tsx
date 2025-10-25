"use client";

import React from "react";

import EditorInput from "./_components/editor/EditorInput";
import EditorOutput from "./_components/editor/EditorOutput";

import { Resizable } from "@usefui/components";
import { LibraryTemplate } from "@/templates";

interface TokenEnginePageProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const DEFAULT_VALUE = JSON.stringify(LibraryTemplate.template, null, 2);

function TokenEnginePage(props: TokenEnginePageProps) {
  const { readOnly, defaultValue, onChange } = props;

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
          defaultValue={defaultValue ?? DEFAULT_VALUE}
          setValue={setValue}
          setError={setError}
          onChange={onChange}
          readOnly={readOnly}
        />
      }
      right={<EditorOutput />}
    />
  );
}

export default TokenEnginePage;
