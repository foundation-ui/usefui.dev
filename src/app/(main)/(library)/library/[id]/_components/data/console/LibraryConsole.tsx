/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import styled from "styled-components";

import EditorBody from "@/features/editor/_components/containers/EditorBody";
import { ScrollArea } from "@foundation-ui/components";

import { generateCSSVariables } from "@foundation-ui/core";
import type { libraries_table as librariesSchema } from "@/server/db/schema";

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
  data,
  lang,
}: {
  data: typeof librariesSchema.$inferSelect;
  lang: "json" | "css";
}) {
  const [library] = React.useState<any>(JSON.parse(String(data.library)));
  const [designTokens] = React.useState<string>(
    JSON.stringify(
      {
        ...JSON.parse(data.library as any)?.design_tokens,
      },
      null,
      2,
    ),
  );

  const cssVars = generateCSSVariables(library);
  const colorVars = cssVars.color.toString();
  const alphaVars = cssVars.alpha.toString();
  const tintVars = cssVars.tint.toString();
  const shadesVars = cssVars.shade.toString();
  const fontsizeVars = cssVars.fontsize.toString();
  const measurementVars = cssVars.measurement.toString();
  const depthVars = cssVars.depth.toString();
  const opacityVars = cssVars.opacity.toString();

  const vars = `:root {
    ${colorVars}
    ${alphaVars}
    ${tintVars}
    ${shadesVars}
    ${fontsizeVars}
    ${measurementVars}
    ${depthVars}
    ${opacityVars}
  }`
    .replaceAll(",\n", "")
    .replaceAll(",,,", "")
    .replaceAll(" ", "");

  return (
    <ConsoleWrapper>
      {lang === "json" && <EditorBody value={designTokens} readOnly={true} />}
      {lang === "css" && <EditorBody value={vars} readOnly={true} />}
    </ConsoleWrapper>
  );
}

export default LibraryConsole;
