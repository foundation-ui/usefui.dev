"use client";

import React from "react";
import { useRouter } from "next/navigation";

import EditorInput from "./_components/editor/EditorInput";
import EditorOutput from "./_components/editor/EditorOutput";

import { DropdownMenu, Portal, Resizable } from "@usefui/components";
import { LibraryTemplate } from "@/templates";
import { Icon } from "@usefui/icons";

const DEFAULT_VALUE = JSON.stringify(LibraryTemplate.template, null, 2);

function TokenEnginePage() {
  const router = useRouter();

  const [value, setValue] = React.useState<string>(DEFAULT_VALUE);
  const [error, setError] = React.useState<string | null>(null);
  const deferredEditorValue = React.useDeferredValue(value);

  return (
    <React.Fragment>
      <Portal container="nav-portal">
        <DropdownMenu.Root>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <span className="flex align-center p-y-small-60">
                <Icon>
                  <Icon.Menu />
                </Icon>
              </span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                className="flex g-medium-30 align-center"
                onMouseDown={() => router.push("/")}
              >
                <Icon fillOpacity={0.6}>
                  <Icon.ArrowLeft />
                </Icon>
                Homepage
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="flex g-medium-30 align-center"
                onMouseDown={() => router.push("/docs/introduction")}
              >
                <Icon fillOpacity={0.6}>
                  <Icon.LinkExternal />
                </Icon>
                Documentation
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </DropdownMenu.Root>
      </Portal>

      <Resizable
        defaultWidth={40}
        left={
          <EditorInput
            error={error}
            value={deferredEditorValue}
            defaultValue={DEFAULT_VALUE}
            setValue={setValue}
            setError={setError}
            onChange={undefined}
            readOnly={false}
          />
        }
        right={<EditorOutput />}
      />
    </React.Fragment>
  );
}

export default TokenEnginePage;
