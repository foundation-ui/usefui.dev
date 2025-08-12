"use client";

import React from "react";

import { useEngineStore } from "@/stores";

import FormatCode from "../triggers/FormatCode";
import ResetCode from "../triggers/ResetCode";
import RunCode from "../triggers/RunCode";

import { TextMuted } from "@/components";
import { Field, Page } from "@usefui/components";

type EditorMenuProps = {
  value: string;
  defaultValue?: string;

  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
};

function EditorMenu({
  value,
  defaultValue,
  setValue,
  setError,
  onChange,
}: EditorMenuProps) {
  const name = useEngineStore((state) => state.name);
  const setLibraryName = useEngineStore((state) => state.setLibraryName);

  const resetEditor = () => {
    setValue(String(defaultValue));
    setError(null);
  };

  return (
    <Page.Navigation className="flex align-center justify-between g-medium-60 w-100">
      <Field.Root>
        <Field.Label
          className="flex align-center w-100"
          htmlFor="library-name"
          optional
        >
          <Field
            autoComplete="false"
            id="library-name-field"
            variant="ghost"
            className="fs-medium-10"
            sizing="small"
            placeholder={name}
            value={name}
            onChange={(event) => setLibraryName(event.target.value)}
            style={{ width: "100%" }}
          />
        </Field.Label>
      </Field.Root>
      <div className="flex align-center g-medium-60">
        <FormatCode
          value={value}
          setValue={setValue}
          setError={setError}
          onChange={onChange}
        />
        <ResetCode resetCallback={resetEditor} />
        <TextMuted className="opacity-default-10">|</TextMuted>

        <RunCode value={value} name={name} setError={setError} />
      </div>
    </Page.Navigation>
  );
}

export default EditorMenu;
