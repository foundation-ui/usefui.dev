"use client";

import React from "react";
import styled from "styled-components";

import EditorBody from "@/features/editor/_components/containers/EditorBody";
import { ScrollArea } from "@foundation-ui/components";

const ConsoleWrapper = styled(ScrollArea)`
  height: 100%;
  width: auto;
  max-height: var(--breakpoint-mobile);
  padding: var(--measurement-medium-60);

  border: var(--measurement-small-30) solid var(--font-color-alpha-10);
  border-radius: var(--measurement-medium-30);

  background: var(--body-color);
  background-image: linear-gradient(
    45deg,
    var(--body-color) 0%,
    var(--contrast-color) 100%
  );
`;

function LibraryConsole({
  value,
  language,
}: {
  value: string;
  language?: "json" | "css";
}) {
  return (
    <ConsoleWrapper>
      <EditorBody value={value} readOnly={true} language={language} />
    </ConsoleWrapper>
  );
}

export default LibraryConsole;
