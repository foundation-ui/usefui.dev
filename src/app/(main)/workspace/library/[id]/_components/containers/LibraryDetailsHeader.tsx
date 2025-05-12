"use client";

import React from "react";

import DeleteAction from "../triggers/DeleteAction";
import LibraryDetailsSheet from "./LibraryDetailsSheet";
import { HeroSubtitle } from "@/components";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetailsHeader({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <React.Fragment>
      <hgroup className="grid align-start justiy-start">
        <HeroSubtitle className="m-b-medium-10">{data.name}</HeroSubtitle>
        <p className="fs-medium-10 opacity-default-30">
          {data.description === "" ? "No description" : data.description}
        </p>
      </hgroup>

      <div className="flex align-center g-medium-10">
        <LibraryDetailsSheet data={data} />
        <DeleteAction libraryId={Number(data.id)} />
      </div>
    </React.Fragment>
  );
}

export default LibraryDetailsHeader;
