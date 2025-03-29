"use client";

import React from "react";

import { Icon } from "@/components";
import { Tooltip, Button } from "@foundation-ui/components";

import { engine_template } from "@foundation-ui/tokens";

type ResetCodeProps = {
  defaultValue?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

function ResetCode({ defaultValue, setValue, setError }: ResetCodeProps) {
  const resetEditor = () => {
    setValue(defaultValue ?? JSON.stringify(engine_template, null, 4));
    setError(null);
  };

  return (
    <Tooltip content="Reset">
      <Button variant="ghost" onClick={resetEditor}>
        <Icon>
          <Icon.Reload />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default ResetCode;
