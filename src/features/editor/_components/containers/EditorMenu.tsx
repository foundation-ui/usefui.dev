"use client";

import React from "react";

import FormatCode from "../triggers/FormatCode";
import ResetCode from "../triggers/ResetCode";
import RunCode from "../triggers/RunCode";

import { TextMuted } from "@/components/shared/TextMuted";

import { Tooltip, DialogControl, Button } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { LibraryTemplate } from "@/templates";

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
  const resetEditor = () => {
    setValue(defaultValue ?? JSON.stringify(LibraryTemplate.template, null, 2));
    setError(null);
  };

  return (
    <nav className="flex align-start justify-between m-b-medium-60">
      <div className="flex g-medium-60 align-center">
        <RunCode value={value} setError={setError} />
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
        <Tooltip content="Download Input">
          <Button sizing="small" variant="ghost" disabled>
            <Icon>
              <PixelIcon.Download />
            </Icon>
          </Button>
        </Tooltip>
        <TextMuted className="opacity-default-10">|</TextMuted>
        <Tooltip content="Close Editor">
          <DialogControl sizing="small" variant="ghost" onClick={resetEditor}>
            <Icon>
              <PixelIcon.Close />
            </Icon>
          </DialogControl>
        </Tooltip>
      </div>
    </nav>
  );
}

export default EditorMenu;
