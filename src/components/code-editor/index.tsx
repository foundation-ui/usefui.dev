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

  /* Enhanced bracket matching */
  .cm-matchingBracket {
    background-color: var(--font-color-alpha-10);
    border-radius: 2px;
    font-weight: 600;
  }

  .cm-nonmatchingBracket {
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: 2px;
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
    fontSize: "var(--fontsize-small-50)",
    fontFamily: "var(--font-mono)",
    gutterActiveForeground: "var(--font-color-alpha-30)",
    gutterBackground: "var(--contrast-color)",
    gutterBorder: "var(--font-color-alpha-10)",
    lineHighlight: "var(--contrast-color)",
  },
  styles: [
    // JSON-specific: Property names (keys)
    { tag: t.propertyName, color: "rgb(224, 108, 117)", fontWeight: "500" },

    // JSON values
    { tag: t.string, color: "rgb(152, 195, 121)" },
    { tag: t.number, color: "rgb(224, 108, 117)", fontWeight: "500" },
    { tag: t.bool, color: "rgb(209, 154, 102)", fontWeight: "600" },
    { tag: t.null, color: "var(--font-color-alpha-30)", fontWeight: "600" },

    // Brackets and braces
    {
      tag: t.squareBracket,
      color: "var(--font-color-alpha-60)",
      fontWeight: "600",
    },
    { tag: t.brace, color: "var(--font-color-alpha-60)", fontWeight: "600" },
    { tag: t.bracket, color: "var(--font-color-alpha-60)", fontWeight: "600" },

    // Punctuation (colons, commas)
    { tag: t.separator, color: "var(--font-color-alpha-60)" },
    { tag: t.punctuation, color: "var(--font-color-alpha-60)" },
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
    // Return undefined for unsupported languages, CodeMirror handles it gracefully
    return undefined;
  }, [language]) as Extension;

  const handleChange = React.useCallback(
    (newValue: string) => {
      setValue?.(newValue);

      if (!newValue.trim()) {
        setError?.("Code cannot be empty");
        return;
      }

      // Validate JSON when language is json
      if (language === "json") {
        try {
          JSON.parse(newValue);
          setError?.(null);
        } catch (e) {
          setError?.(e instanceof Error ? e.message : "Invalid JSON syntax");
        }
      } else {
        setError?.(null);
      }

      onChange?.(newValue);
    },
    [setValue, onChange, setError, language],
  );

  return (
    <EditorWrapper className="h-100 w-100" scrollbar>
      <CodeMirror
        value={value}
        autoFocus
        height="100%"
        onChange={handleChange}
        extensions={languageExtension ? [languageExtension] : []}
        readOnly={readOnly}
        editable={!readOnly}
        theme={EditorTheme}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          foldGutter: true,
          searchKeymap: false,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: !readOnly, // Auto-close brackets when editing
          autocompletion: !readOnly,
        }}
        className="fs-medium-10"
        aria-label="Code editor"
      />
    </EditorWrapper>
  );
}

export default CodeEditor;
