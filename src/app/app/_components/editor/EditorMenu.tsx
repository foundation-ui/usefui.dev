"use client";

import React from "react";
import styled from "styled-components";

import { useEngineStore } from "@/stores";

import FormatCode from "../triggers/FormatCode";
import ResetCode from "../triggers/ResetCode";
import RunCode from "../triggers/RunCode";

import { Field, Page } from "@usefui/components";

const MenuWrapper = styled(Page.Navigation)`
  box-shadow: 0 0 var(--measurement-medium-50) var(--measurement-medium-10)
    var(--contrast-color);

  background: var(--contrast-color) !important;

  border: none;
  z-index: 1;
`;

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
    <MenuWrapper className="flex align-center justify-between g-medium-10 w-100">
      <Field.Root>
        <Field.Label
          className="flex align-center w-100"
          htmlFor="library-name"
          optional
        >
          <Field
            autoComplete="false"
            id="library-name-field"
            variant="secondary"
            className="w-100"
            sizing="small"
            placeholder="design-tokens-library"
            value={name}
            onChange={(event) => setLibraryName(event.target.value)}
          />
        </Field.Label>
      </Field.Root>

      <div className="flex align-center g-medium-10">
        <FormatCode
          value={value}
          setValue={setValue}
          setError={setError}
          onChange={onChange}
        />
        <ResetCode resetCallback={resetEditor} />
        <RunCode value={value} name={name} setError={setError} />
      </div>
    </MenuWrapper>
  );
}

export default EditorMenu;
