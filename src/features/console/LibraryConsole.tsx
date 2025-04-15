"use client";

import React from "react";

import EditorBody from "@/features/editor/_components/EditorBody";
import ConsoleBody from "./_components/ConsoleBody";
import LibraryConsoleActions from "./_components/LibraryConsoleActions";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Toolbar } from "@foundation-ui/components";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryConsole({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  const [designTokens] = React.useState<string>(
    JSON.stringify(
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        ...JSON.parse(data.library as any)?.design_tokens,
      },
      null,
      2,
    ),
  );

  return (
    <ConsoleBody>
      <Toolbar.Section
        showoncollapse
        className="flex align-center justify-between w-100 g-medium-60 p-y-medium-30"
      >
        <Toolbar.Trigger variant="ghost">
          <Icon>
            <PixelIcon.Script />
          </Icon>
          <span className="fs-medium-10">Output</span>
        </Toolbar.Trigger>

        <LibraryConsoleActions value={designTokens} />
      </Toolbar.Section>

      <Toolbar.Section>
          <EditorBody value={designTokens} readOnly={true} />
      </Toolbar.Section>
    </ConsoleBody>
  );
}

export default LibraryConsole;
