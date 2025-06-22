/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import LibraryConsole from "./LibraryConsole";
import CopyCode from "@/features/console/_components/triggers/CopyCode";

import { generateCSSVariables } from "@foundation-ui/core";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function CssVariablesConsole({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  const [library] = React.useState<any>(JSON.parse(String(data.library)));

  const cssVars = generateCSSVariables(library);
  const colorVars = cssVars.color.toString();
  const alphaVars = cssVars.alpha.toString();
  const tintVars = cssVars.tint.toString();
  const shadesVars = cssVars.shade.toString();
  const fontsizeVars = cssVars.fontsize.toString();
  const measurementVars = cssVars.measurement.toString();
  const depthVars = cssVars.depth.toString();
  const opacityVars = cssVars.opacity.toString();

  const vars = `
    :root {
      ${colorVars}
      ${alphaVars}
      ${tintVars}
      ${shadesVars}
      ${fontsizeVars}
      ${measurementVars}
      ${depthVars}
      ${opacityVars}
    }
    `
    // Remove trailing commas at the end of lines
    .replace(/,\s*\n/g, "\n")
    // Remove consecutive commas
    .replace(/,{2,}/g, "")
    // Remove empty lines
    .replace(/^\s*[\r\n]/gm, "")
    // Clean up any remaining empty declarations
    .replace(/--[^:]+:\s*;/g, "")
    // Ensure proper spacing after semicolons
    .replace(/;(?!\s*[\r\n])/g, ";\n  ")
    // Remove trailing whitespace
    .replace(/\s+$/gm, "");

  return (
    <React.Fragment>
      <hgroup className="flex align-center g-medium-10">
        <h6 className="fs-medium-20">CSS Variables</h6>
        <CopyCode value={vars} />
      </hgroup>
      <LibraryConsole value={vars} language="css" />
    </React.Fragment>
  );
}

export default CssVariablesConsole;
