"use client";

import React from "react";

import FormatCode from "../triggers/FormatCode";
import ResetCode from "../triggers/ResetCode";
import RunCode from "../triggers/RunCode";

import { TextMuted } from "@/components/shared/TextMuted";

import {
  Tooltip,
  DialogControl,
  Field,
  Divider,
} from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { LibraryTemplate } from "@/templates";

type EditorMenuProps = {
  value: string;
  defaultValue?: string;
  libraryName: string;
  defaultLibraryName: string;

  setValue: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
};

function EditorMenu({
  value,
  libraryName,
  defaultValue,
  defaultLibraryName,
  setValue,
  setName,
  setError,
  onChange,
}: EditorMenuProps) {
  const resetEditor = () => {
    setValue(defaultValue ?? JSON.stringify(LibraryTemplate.template, null, 2));
    setName(defaultLibraryName);
    setError(null);
  };

  return (
    <header className="m-b-medium-60 w-100">
      <nav className="flex align-center justify-between g-large-10 w-100">
        <div className="flex g-medium-60 align-center">
          <RunCode value={value} name={libraryName} setError={setError} />
          <TextMuted className="opacity-default-10">|</TextMuted>
          <FormatCode
            value={value}
            setValue={setValue}
            setError={setError}
            onChange={onChange}
          />
          <ResetCode resetCallback={resetEditor} />
        </div>

        <div className="flex g-medium-60 align-center">
          <Tooltip content="Close Editor">
            <DialogControl sizing="small" variant="ghost" onClick={resetEditor}>
              <Icon>
                <PixelIcon.Close />
              </Icon>
            </DialogControl>
          </Tooltip>
        </div>
      </nav>
      <Divider className="m-y-medium-60" />
      <Field.Root>
        <Field.Label
          className="flex align-center"
          htmlFor="library-name"
          optional
        >
          <Icon>
            <PixelIcon.LabelAlt />
          </Icon>
          <Field
            autoComplete="false"
            id="library-name"
            variant="ghost"
            sizing="small"
            placeholder={libraryName}
            value={libraryName}
            onChange={(event) => setName(event.target.value)}
            style={{ width: "100%" }}
          />
        </Field.Label>
      </Field.Root>
    </header>
  );
}

export default EditorMenu;
