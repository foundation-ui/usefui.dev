"use client";

import React from "react";

import { Icon } from "@/components";
import { Badge } from "@foundation-ui/components";

function EditorLogger({ error }: { error: string | null }) {
  return (
    <footer className="flex align-center justify-start g-medium-30 p-y-medium-30">
      <Badge
        variant={error ? "error" : "border"}
        style={{ gap: "var(--measurement-medium-30)!important" }}
      >
        <Icon
          viewBox="0 0 16 16"
          fill={error ? "var(--color-red)" : "var(--font-color-alpha-30)"}
        >
          <Icon.Terminal />
        </Icon>
        {error ?? (
          <Icon fill="var(--font-color-alpha-30)">
            <Icon.Check />
          </Icon>
        )}
      </Badge>
    </footer>
  );
}

export default EditorLogger;
