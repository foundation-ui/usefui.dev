"use client";

import React from "react";

import { ScrollArea } from "@foundation-ui/components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePreviewProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
}

function DocsCodePreview({ code, language }: CodePreviewProps) {
  const customStyle = {
    padding: "var(--measurement-medium-60)",
    background: "var(--contrast-color)",
    borderRadius: "var(--measurement-medium-30)",
  };

  return (
    <ScrollArea>
      <SyntaxHighlighter
        language={language ?? "tsx"}
        customStyle={customStyle}
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
            backgroundColor: "transparent",
            display: "block",
            width: "100%",
          },
        }}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </ScrollArea>
  );
}

export default DocsCodePreview;
