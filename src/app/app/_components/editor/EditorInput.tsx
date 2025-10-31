"use client";

import React from "react";
import styled from "styled-components";

import EditorMenu from "./EditorMenu";
import EditorConsole from "../console/EditorConsole";

import { CodeEditor } from "@/components";
import { Page } from "@usefui/components";

interface EditorInputProps {
  value: string;
  defaultValue: string;
  error: string | null;

  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  onChange: ((value: string) => void) | undefined;
  readOnly?: boolean;
}

const InputWrapper = styled(Page.Content)`
  background: var(--contrast-color);
  border-right: var(--measurement-small-10) solid var(--font-color-alpha-10);
`;

function EditorInput({
  value,
  defaultValue,
  error,
  setError,
  setValue,
  onChange,
  readOnly,
}: EditorInputProps) {
  return (
    <InputWrapper className="flex flex-column h-100">
      <EditorMenu
        value={value}
        defaultValue={defaultValue}
        setValue={setValue}
        setError={setError}
        onChange={onChange}
      />
      <CodeEditor
        value={value}
        readOnly={readOnly}
        setValue={setValue}
        setError={setError}
        onChange={onChange}
        language="json"
      />
      <EditorConsole mode={error ? "error" : "meta"} value={error} />
    </InputWrapper>
  );
}

export default EditorInput;
