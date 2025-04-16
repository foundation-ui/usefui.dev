"use client";

import React from "react";

import LibraryConsole from "./LibraryConsole";
import LibraryCodeActions from "../../triggers/LibraryCodeActions";

import { Icon, PixelIcon } from "@foundation-ui/icons";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function CssVariablesConsole({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <React.Fragment>
      <hgroup className="flex justify-between align-center g-medium-10">
        <span className="flex align-center g-medium-10">
          <Icon>
            <PixelIcon.Script />
          </Icon>
          <h6 className="fs-medium-20">CSS Variables</h6>
        </span>

        <LibraryCodeActions value={data.library} />
      </hgroup>
      <LibraryConsole lang="css" data={data} />
    </React.Fragment>
  );
}

export default CssVariablesConsole;
