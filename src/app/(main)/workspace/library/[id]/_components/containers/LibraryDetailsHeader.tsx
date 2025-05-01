"use client";

import React from "react";

import DeleteAction from "../triggers/DeleteAction";
import LibraryDetailsSheet from "./LibraryDetailsSheet";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetailsHeader({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <header className="flex justify-between align-end g-medium-60 m-b-medium-60">
      <hgroup>
        <h1 className="fs-medium-40">{data.name}</h1>
        <p className="fs-medium-10 opacity-default-30">
          {data.description === "" ? "No description" : data.description}
        </p>
      </hgroup>
      <div className="flex align-center g-medium-10">
        <LibraryDetailsSheet data={data} />
        <DeleteAction libraryId={Number(data.id)} />
      </div>
    </header>
  );
}

export default LibraryDetailsHeader;
