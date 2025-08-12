/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import EditorBody from "./EditorBody";

import { generateCSSVariables } from "@usefui/core";

function CSSEditor({ data }: { data: string }) {
  const [library] = React.useState<any>(JSON.parse(String(data)));

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

  return <EditorBody value={vars} language="css" readOnly />;
}

export default CSSEditor;
