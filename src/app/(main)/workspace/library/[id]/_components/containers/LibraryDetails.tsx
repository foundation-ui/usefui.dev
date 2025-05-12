"use client";

import React from "react";

import JsonVariablesConsole from "../data/console/JsonVariablesConsole";
import CssVariablesConsole from "../data/console/CssVariablesConsole";
import LibrarySizeCard from "../data/card/LibrarySizeCard";
import PayloadSizeCard from "../data/card/PayloadSizeCard";
import LibraryDetailsHeader from "./LibraryDetailsHeader";

import { MaxWidthContainer } from "@/components";
import { Divider } from "@foundation-ui/components";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetails({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <section className="w-100 h-100 p-medium-60">
      <MaxWidthContainer className="w-100 p-t-medium-60 p-b-medium-30 flex align-start justify-between g-medium-60">
        <LibraryDetailsHeader data={data} />
      </MaxWidthContainer>
      <MaxWidthContainer className="w-100">
        <LibrarySizeCard data={data} />
        <PayloadSizeCard data={data} />
      </MaxWidthContainer>

      <Divider className="m-y-medium-60" />

      <MaxWidthContainer className="w-100 p-b-medium-60 grid  g-medium-30">
        <JsonVariablesConsole data={data} />
        <Divider className="m-y-medium-60" />
        <CssVariablesConsole data={data} />
      </MaxWidthContainer>
    </section>
  );
}

export default LibraryDetails;
