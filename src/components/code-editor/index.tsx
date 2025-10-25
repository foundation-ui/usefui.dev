"use client";

import React from "react";
import styled from "styled-components";

import { ScrollArea } from "@usefui/components";

import CodeMirror, { type Extension } from "@uiw/react-codemirror";

import { json } from "@codemirror/lang-json";
import { css } from "@codemirror/lang-css";

import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

interface CodeEditorProps {
  readOnly?: boolean;
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
  language?: "css" | "json" | "jsx" | "tsx" | "ts" | "js";
}

const EditorWrapper = styled(ScrollArea)`
  border-top-right-radius: var(--measurement-medium-30);
  border-bottom-right-radius: var(--measurement-medium-30);

  .cm-theme {
    height: 100%;
  }

  .cm-foldGutter span {
    color: var(--font-color-alpha-60) !important;
  }
  .cm-lineNumbers .cm-gutterElement {
    color: var(--font-color-alpha-10) !important;
  }

  .cm-scroller {
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    &::-moz-scrollbar {
      display: none;
    }
  }
`;

const EditorTheme = createTheme({
  theme: "light",
  settings: {
    background: "",
    backgroundImage: "",
    foreground: "var(--font-color)",
    caret: "var(--font-color-alpha-60)",
    selection: "var(--font-color-alpha-10)",
    selectionMatch: "var(--font-color-alpha-10)",
    fontSize: "var(--fontsize-small-60)",
    fontFamily: "var(--font-mono)",
    gutterActiveForeground: "var(--font-color-alpha-30)",
    gutterBackground: "var(--contrast-color)",
    gutterBorder: "var(--font-color-alpha-10)",
    lineHighlight: "transparent",
  },
  styles: [
    { tag: t.number, color: "var(--tint-blue-30)" },
    { tag: t.string, color: "var(--shade-green-10)" },
    { tag: t.bracket, color: "var(--font-color)" },
    { tag: t.punctuation, color: "var(--font-color)" },
    { tag: t.comment, color: "var(--font-color-alpha-40)" },
    { tag: t.keyword, color: "var(--tint-purple-30)" },
    { tag: t.function(t.variableName), color: "var(--tint-blue-20)" },
    { tag: t.typeName, color: "var(--tint-orange-30)" },
  ],
});

function CodeEditor({
  value,
  readOnly,
  setValue,
  setError,
  onChange,
  language = "tsx",
}: CodeEditorProps) {
  const languageExtension = React.useMemo(() => {
    if (language === "css") return css();
    if (language === "json") return json();
  }, [language]) as Extension;

  const handleChange = React.useCallback(
    (newValue: string) => {
      setValue?.(newValue);

      if (!newValue.trim()) {
        setError?.("Code cannot be empty");
        return;
      }

      setError?.(null);
      onChange?.(newValue);
    },
    [setValue, onChange, setError],
  );

  return (
    <EditorWrapper className="h-100 w-100" scrollbar>
      <CodeMirror
        value={value}
        height="100%"
        onChange={handleChange}
        extensions={[languageExtension]}
        readOnly={readOnly}
        editable={readOnly ? false : true}
        theme={EditorTheme}
        basicSetup={{
          lineNumbers: false,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          foldGutter: false,
          searchKeymap: false,
          indentOnInput: true,
        }}
        className="fs-medium-10"
        aria-label="Code editor"
      />
    </EditorWrapper>
  );
}

export default CodeEditor;
