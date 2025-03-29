"use client";

import React from "react";

import { Icon } from "@/components";
import { Tooltip, Button } from "@foundation-ui/components";

function CopyCode({ value, delay = 1000 }: { value: string; delay?: number }) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), delay);
    });

    clearTimeout(delay);
  };

  return (
    <Tooltip content={copied ? "Copied!" : "Copy"}>
      <Button variant="ghost" onClick={copyToClipboard}>
        <Icon>
          <Icon.Copy />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default CopyCode;
