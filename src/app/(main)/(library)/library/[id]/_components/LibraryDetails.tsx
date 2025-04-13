"use client";

import React from "react";
import styled from "styled-components";

import LibraryData from "./LibraryData";
import LibraryConsole from "@/features/console/LibraryConsole";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function LibraryDetails({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <PageWrapper className="w-100 h-100">
      <LibraryData data={data} />
      <LibraryConsole data={data} />
    </PageWrapper>
  );
}

export default LibraryDetails;
