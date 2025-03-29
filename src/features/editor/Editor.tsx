"use client";

import React from "react";
import styled from "styled-components";

import { Portal, Dialog, ScrollArea } from "@foundation-ui/components";

import EditorMenu from "./_components/EditorMenu";
import EditorBody from "./_components/EditorBody";
import EditorLogger from "./_components/EditorLogger";

import { engine_template } from "@foundation-ui/tokens";

interface EditorProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const DialogBody = styled(Dialog)`
  height: 100%;
  padding: var(--measurement-medium-60) !important;
  /* border: none !important; */
`;
const Overlay = styled(Dialog.Overlay)`
  background-color: transparent !important;
  backdrop-filter: blur(var(--measurement-medium-10));
`;

function Editor({
  defaultValue = JSON.stringify(engine_template, null, 2),
  onChange,
  readOnly = false,
}: EditorProps) {
  const [value, setValue] = React.useState<string>(defaultValue);
  const [error, setError] = React.useState<string | null>(null);

  const deferredEditorValue = React.useDeferredValue(value);

  return (
    <Portal container="portal-container">
      <DialogBody sizing="large">
        <ScrollArea
          className="flex justify-between h-100"
          style={{ flexDirection: "column" }}
        >
          <EditorMenu
            value={deferredEditorValue}
            defaultValue={defaultValue}
            setValue={setValue}
            setError={setError}
            onChange={onChange}
          />

          <EditorBody
            value={deferredEditorValue}
            readOnly={readOnly}
            setValue={setValue}
            setError={setError}
            onChange={onChange}
          />

          <EditorLogger error={error} />
        </ScrollArea>
      </DialogBody>

      <Overlay />
    </Portal>
  );
}

export default Editor;
