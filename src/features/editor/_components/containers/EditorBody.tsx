"use client";

import React from "react";
import styled from "styled-components";

import { ScrollArea } from "@foundation-ui/components";

import CodeMirror, { type Extension } from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { css } from "@codemirror/lang-css";

import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

type EditorBodyProps = {
  readOnly?: boolean;
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
  language?: "json" | "css";
};

const EditorWrapper = styled(ScrollArea)`
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
    // Common styles
    { tag: t.number, color: "var(--tint-blue-30)" },
    { tag: t.string, color: "var(--shade-green-10)" },
    { tag: t.bracket, color: "var(--font-color)" },
    { tag: t.punctuation, color: "var(--font-color)" },
    { tag: t.comment, color: "var(--font-color-alpha-40)" },

    // JSON specific
    { tag: t.name, color: "var(--tint-purple-60)" },
    { tag: t.bool, color: "var(--tint-blue-30)" },

    // CSS specific
    { tag: t.propertyName, color: "var(--tint-purple-60)" },
    { tag: t.variableName, color: "var(--tint-purple-30)" },
    { tag: t.className, color: "var(--tint-blue-60)" },
    { tag: t.color, color: "var(--tint-blue-30)" },
    { tag: t.keyword, color: "var(--tint-red-30)" },
    { tag: t.unit, color: "var(--tint-orange-30)" },
  ],
});

function EditorBody({
  value,
  readOnly,
  setValue,
  setError,
  onChange,
  language,
}: EditorBodyProps) {
  const languageExtension = React.useMemo(() => {
    if (language === "css") return css();
    if (language === "json") return json();
  }, [language]) as Extension;

  const languageValidation = React.useCallback(() => {
    return {
      json: (value: string) => {
        JSON.parse(value);
        setError?.(null);
        onChange?.(value);
      },
      css: (value: string) => {
        // Check for balanced braces
        const openBraces = (value.match(/{/g) ?? []).length;
        const closeBraces = (value.match(/}/g) ?? []).length;

        if (openBraces !== closeBraces) {
          setError?.("Unbalanced braces in CSS");
        } else {
          setError?.(null);
          onChange?.(value);
        }
      },
    };
  }, [onChange, setError]);

  const handleChange = React.useCallback(
    (newValue: string) => {
      setValue?.(newValue);

      try {
        if (language === "json") languageValidation().json(newValue);
        if (language === "css") languageValidation().css(newValue);
      } catch (e) {
        if (e instanceof Error) setError?.(e.message);
        else setError?.(`Invalid ${language?.toUpperCase()}`);
      }
    },

    [setValue, language, languageValidation, setError],
  );

  return (
    <EditorWrapper className="h-100 w-100">
      <CodeMirror
        value={value}
        height="100%"
        onChange={handleChange}
        extensions={[languageExtension]}
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
