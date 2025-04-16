"use client";

import React from "react";

import LibraryDetailsHeader from "./LibraryDetailsHeader";
import LibrarySizeCard from "../data/card/LibrarySizeCard";
import PayloadSizeCard from "../data/card/PayloadSizeCard";

import { GridLayout } from "@/components";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetailsData({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <section>
      <LibraryDetailsHeader data={data} />
      <GridLayout>
        <LibrarySizeCard data={data} />
        <PayloadSizeCard data={data} />
      </GridLayout>
    </section>
  );
}

export default LibraryDetailsData;
