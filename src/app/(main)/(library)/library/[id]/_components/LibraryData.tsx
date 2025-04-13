"use client";

import React from "react";

import { MaxWidthContainer } from "@/components";
import { Divider } from "@foundation-ui/components";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryData({ data }: { data: typeof librariesSchema.$inferSelect }) {
  return (
    <MaxWidthContainer className="g-medium-30 w-100 p-large-10">
      <hgroup>
        <h1 className="fs-large-10 m-b-medium-10">{data.title}</h1>
        <p className="fs-medium-20 opacity-default-30">
          {data.description === "" ? "No description" : data.description}
        </p>
      </hgroup>
      <Divider className="m-b-medium-60" />
    </MaxWidthContainer>
  );
}

export default LibraryData;
