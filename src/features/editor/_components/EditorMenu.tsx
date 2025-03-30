"use client";

import React from "react";

import FunctionSelector from "./FunctionSelector";
import FormatCode from "./FormatCode";
import ResetCode from "./ResetCode";
import RunCode from "./RunCode";

import { TextMuted } from "@/components/shared/TextMuted";

import { Tooltip, DialogControl } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

import { engine_template } from "@foundation-ui/tokens";

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
    setValue(defaultValue ?? JSON.stringify(engine_template, null, 4));
    setError(null);
  };

  return (
    <nav className="flex align-start justify-between m-b-medium-60">
      <div className="flex g-medium-10 align-center">
        <FunctionSelector />

        <TextMuted className="opacity-default-10 p-x-medium-30">|</TextMuted>
        <RunCode />
      </div>

      <div className="flex g-medium-10 align-center">
        <div className="flex g-medium-60 align-center">
          <FormatCode
            value={value}
            setValue={setValue}
            setError={setError}
            onChange={onChange}
          />
          <ResetCode resetCallback={resetEditor} />
        </div>

        <TextMuted className="opacity-default-10 p-x-medium-30">|</TextMuted>

        <Tooltip content="Quit">
          <DialogControl sizing="small" variant="ghost" onClick={resetEditor}>
            <Icon>
              <Icon.Close />
            </Icon>
          </DialogControl>
        </Tooltip>
      </div>
    </nav>
  );
}

export default EditorMenu;
