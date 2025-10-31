/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import { generateCSSVariables } from "@usefui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
`;

  const sanitizedVariables = vars
    // Remove trailing commas at the end of lines
    .replace(/,\s*\n/g, "\n")
    // Remove consecutive commas
    .replace(/,{2,}/g, "")
    // Remove empty lines
    .replace(/^\s*[\r\n]/gm, "");

  return (
    <SyntaxHighlighter
      language="scss"
      customStyle={{
        padding: "0",
        background: "transparent",
        fontSize: "var(--fontsize-small-50)",
        fontFamily: "var(--font-mono)",
      }}
      style={oneDark}
      lineNumberStyle={{
        paddingRight: "var(--measurement-medium-10)",
        textAlign: "right",
        userSelect: "none",
        opacity: 0.6,
      }}
      wrapLines={true}
      lineProps={{
        style: {
          fontFamily: "var(--font-mono)",
          backgroundColor: "transparent",
          display: "block",
          width: "100%",
        },
      }}
      PreTag="div"
    >
      {sanitizedVariables}
    </SyntaxHighlighter>
  );
}

export default CSSEditor;
