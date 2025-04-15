"use client";

import React from "react";

import DeleteAction from "./DeleteAction";
import LibraryDetailsSheet from "./LibraryDetailsSheet";
import LibraryDetailsHeader from "./LibraryDetailsHeader";

import { MaxWidthContainer } from "@/components";
import { Divider } from "@foundation-ui/components";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetailsData({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <MaxWidthContainer className="g-medium-30 w-100 p-large-10">
      <header className="flex justify-between align-end g-medium-30">
        <hgroup>
          <h1 className="fs-large-10">{data.title}</h1>
          <p className="fs-medium-20 opacity-default-30">
            {data.description === "" ? "No description" : data.description}
          </p>
        </hgroup>
        <div className="flex align-center g-medium-60">
          <LibraryDetailsSheet data={data} />
          <DeleteAction libraryId={Number(data.id)} />
        </div>
      </header>
      <Divider className="m-y-medium-60" />
      <LibraryDetailsHeader
        createdAt={data.createdAt}
        updatedAt={data.updatedAt}
      />
      <Divider className="m-y-medium-60" />
    </MaxWidthContainer>
  );
}

export default LibraryDetailsData;
