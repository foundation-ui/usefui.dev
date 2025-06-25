/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import LibraryConsole from "./LibraryConsole";
import CopyCode from "@/app/app/(engine)/_components/console/_components/triggers/CopyCode";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function JsonVariablesConsole({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  const [designTokens] = React.useState<string>(
    JSON.stringify(
      {
        ...JSON.parse(data.library as any)?.design_tokens,
      },
      null,
      2,
    ),
  );

  return (
    <React.Fragment>
      <hgroup className="flex align-center g-medium-30">
        <h6 className="fs-medium-20">JSON Variables</h6>
        <CopyCode value={designTokens} />
      </hgroup>
      <LibraryConsole value={designTokens} language="json" />
    </React.Fragment>
  );
}

export default JsonVariablesConsole;
