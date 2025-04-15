"use client";

import React from "react";
import styled from "styled-components";

import CodeMirror from "@uiw/react-codemirror";
import { ScrollArea } from "@foundation-ui/components";

import { createTheme } from "@uiw/codemirror-themes";
import { json } from "@codemirror/lang-json";
import { tags as t } from "@lezer/highlight";

type EditorBodyProps = {
  readOnly?: boolean;
  value: string;
  sizing?: "small" | "medium" | "large";
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
};

const EditorWrapper = styled(ScrollArea)`
  [data-sizing="small"] {
    max-height: var(--breakpoint-mobile);
  }

  border-radius: var(--measurement-medium-30);

  .cm-foldGutter span {
    color: var(--font-color-alpha-60) !important;
  }
  .cm-lineNumbers .cm-gutterElement {
    color: var(--font-color-alpha-10) !important;
  }
`;
const EditorTheme = createTheme({
  theme: "light",
  settings: {
    background: "var(--contrast-color)",
    backgroundImage: "",
    foreground: "",
    caret: "var(--font-color-alpha-60)",
    selection: "var(--font-color-alpha-10)",
    selectionMatch: "var(--font-color-alpha-10)",
    fontSize: "var(--fontsize-small-60)",
    gutterActiveForeground: "var(--font-color-alpha-30)",

    gutterBackground: "var(--contrast-color)",
    gutterBorder: "var(--font-color-alpha-10)",
    lineHighlight: "var(--font-color-alpha-10)",
  },
  styles: [
    { tag: t.name, color: "var(--tint-purple-60)" },
    { tag: t.bool, color: "var(--tint-blue-30)" },
    { tag: t.number, color: "var(--tint-blue-30)" },
    { tag: t.string, color: "var(--shade-green-10)" },
    { tag: t.bracket, color: "var(--font-color)" },
  ],
});

function EditorBody({
  value,
  readOnly,
  setValue,
  setError,
  onChange,
  sizing,
}: EditorBodyProps) {
  const handleChange = React.useCallback(
    (newValue: string) => {
      setValue?.(newValue);

      try {
        JSON.parse(newValue);
        setError?.(null);
        onChange?.(newValue);
      } catch (e) {
        if (e instanceof Error) {
          setError?.(e.message);
        } else {
          setError?.("Invalid JSON");
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange],
  );

  return (
    <EditorWrapper className="h-100 w-100" data-sizing={String(sizing)}>
      <CodeMirror
        value={value}
        height="100%"
        onChange={handleChange}
        extensions={[json()]}
        readOnly={readOnly}
        theme={EditorTheme}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          foldGutter: true,
          searchKeymap: false,
        }}
        className="fs-medium-10"
      />
    </EditorWrapper>
  );
}

export default EditorBody;
