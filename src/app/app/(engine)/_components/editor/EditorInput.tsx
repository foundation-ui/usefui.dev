"use client";

import React from "react";

import EditorMenu from "./EditorMenu";
import EditorBody from "./EditorBody";
import EditorConsole from "../console/EditorConsole";

interface EditorInputProps {
  value: string;
  defaultValue: string;
  error: string | null;

  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  onChange: ((value: string) => void) | undefined;
  readOnly?: boolean;
}

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
    <div className="flex w-100 h-100" style={{ flexDirection: "column" }}>
      <EditorMenu
        value={value}
        defaultValue={defaultValue}
        setValue={setValue}
        setError={setError}
        onChange={onChange}
      />
      <EditorBody
        value={value}
        readOnly={readOnly}
        setValue={setValue}
        setError={setError}
        onChange={onChange}
        language="json"
      />
      <EditorConsole mode={error ? "error" : "meta"} value={error} />
    </div>
  );
}

export default EditorInput;
