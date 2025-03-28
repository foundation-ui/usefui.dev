"use client";

import React from "react";
import styled from "styled-components";

import {
  Portal,
  Dialog,
  Button,
  ScrollArea,
  Tooltip,
  Badge,
} from "@foundation-ui/components";
import { Icon } from "@/components";
import { TextMuted } from "@/components/shared/TextMuted";

import { engine_template } from "@foundation-ui/tokens";

const DialogBody = styled(Dialog)`
  height: 100%;
  padding: var(--measurement-medium-60) !important;
  border: none !important;
`;
const Overlay = styled(Dialog.Overlay)`
  background-color: transparent !important;
  backdrop-filter: blur(var(--measurement-medium-10));
`;

const TextArea = styled.textarea`
  padding: var(--measurement-medium-60);
  border-radius: var(--measurement-medium-30);
  background: var(--contrast-color);
  border: var(--measurement-small-30) solid var(--font-color-alpha-10);

  max-width: 100%;
  min-width: 100%;
  min-height: 100%;

  outline: none;
  resize: none;

  font-family: monospace;
  font-size: var(--fontsize-medium-10);

  will-change: color;
  transition:
    color,
    ease-in-out 0.2s;

  &:focus,
  &:active {
    border-color: transparent;
  }

  &::selection {
    color: var(--body-color);
    background-color: var(--font-color);
  }
`;

function Editor() {
  const [jsonInput, setJsonInput] = React.useState<string>(
    JSON.stringify(engine_template, null, 4),
  );
  const [validationResult, setValidationResult] = React.useState<{
    valid: boolean;
    message: string;
  } | null>(null);

  const resetEditor = () => {
    setJsonInput(JSON.stringify(engine_template, null, 4));
    setValidationResult(null);
  };
  const formatJson = () => {
    try {
      if (!jsonInput.trim()) {
        setValidationResult({
          valid: false,
          message: "Please enter JSON to format",
        });

        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 2);

      setJsonInput(formattedJson);
      setValidationResult({
        valid: true,
        message: "JSON formatted successfully",
      });
    } catch (error) {
      setValidationResult({
        valid: false,
        message: `Invalid JSON: ${error instanceof Error ? error.message : "Unknown error"}`,
      });
    }
  };
  const validateJson = () => {
    try {
      if (!jsonInput.trim()) {
        setValidationResult({
          valid: false,
          message: "Please enter JSON to validate",
        });
        return;
      }

      JSON.parse(jsonInput);
      setValidationResult({ valid: true, message: "JSON is valid" });
    } catch (error) {
      setValidationResult({
        valid: false,
        message: `Invalid JSON: ${error instanceof Error ? error.message : "Unknown error"}`,
      });
    }
  };

  return (
    <Portal container="portal-container">
      <DialogBody sizing="large">
        <ScrollArea
          className="flex justify-between h-100"
          style={{ flexDirection: "column" }}
        >
          <nav className="flex align-start justify-between m-b-medium-60">
            <div className="flex g-medium-10 align-center">
              <Tooltip content="Reset">
                <Button variant="ghost" onClick={resetEditor}>
                  <Icon>
                    <Icon.Reload />
                  </Icon>
                </Button>
              </Tooltip>

              <TextMuted className="opacity-default-10 p-x-medium-30">
                |
              </TextMuted>
              <div className="flex g-medium-60 align-center">
                <Tooltip content="Beautify">
                  <Button variant="ghost" onClick={formatJson}>
                    <Icon>
                      <Icon.Sparkles />
                    </Icon>
                  </Button>
                </Tooltip>
                <Tooltip content="Validate">
                  <Button variant="ghost" onClick={validateJson}>
                    <Icon>
                      <Icon.Code />
                    </Icon>
                  </Button>
                </Tooltip>
                <Tooltip content="Copy">
                  <Button variant="ghost" disabled>
                    <Icon>
                      <Icon.Copy />
                    </Icon>
                  </Button>
                </Tooltip>
              </div>
            </div>

            <Dialog.Control
              sizing="small"
              variant="ghost"
              onClick={resetEditor}
            >
              <Icon>
                <Icon.Close />
              </Icon>
            </Dialog.Control>
          </nav>

          <form className="m-b-medium-60 h-100">
            <ScrollArea
              as={TextArea}
              placeholder="{}"
              value={jsonInput}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setJsonInput(e.target.value)
              }
            >
              {jsonInput}
            </ScrollArea>
          </form>

          <footer className="flex align-center justify-end g-medium-10">
            {validationResult && (
              <Badge variant={validationResult.valid ? "success" : "error"}>
                {validationResult.valid
                  ? "Valid JSON Format"
                  : validationResult.message}
              </Badge>
            )}

            <Button
              variant="border"
              sizing="small"
              className="fs-medium-10"
              onClick={validateJson}
            >
              Run
              <Icon>
                <Icon.Run />
              </Icon>
            </Button>
          </footer>
        </ScrollArea>
      </DialogBody>

      <Overlay />
    </Portal>
  );
}

export default Editor;
