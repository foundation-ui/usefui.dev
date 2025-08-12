"use client";

import React from "react";

import { Icon, PixelIcon } from "@usefui/icons";
import { Tooltip, Button } from "@usefui/components";

type FormatCodeProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
};

function FormatCode({ value, setValue, setError, onChange }: FormatCodeProps) {
  const formatJsonValue = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(value), null, 2);
      setValue(formatted);
      setError(null);
      onChange?.(formatted);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Invalid JSON");
      }
    }
  };

  return (
    <Tooltip content="Format code">
      <Button
        variant="ghost"
        onClick={formatJsonValue}
        id="format-code-trigger"
      >
        <Icon>
          <PixelIcon.Zap />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default FormatCode;
