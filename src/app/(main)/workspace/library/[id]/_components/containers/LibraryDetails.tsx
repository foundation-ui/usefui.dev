"use client";

import React from "react";
import styled from "styled-components";

import LibraryDetailsData from "./LibraryDetailsData";
import JsonVariablesConsole from "../data/console/JsonVariablesConsole";
import CssVariablesConsole from "../data/console/CssVariablesConsole";

import { MaxWidthContainer } from "@/components";
import { Divider } from "@foundation-ui/components";

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
    <PageWrapper className="w-100 h-100 p-medium-60">
      <MaxWidthContainer className="grid g-large-10 w-100">
        <LibraryDetailsData data={data} />

        <section className="grid g-medium-30">
          <JsonVariablesConsole data={data} />
          <Divider className="m-y-medium-60" />
          <CssVariablesConsole data={data} />
        </section>
      </MaxWidthContainer>
    </PageWrapper>
  );
}

export default LibraryDetails;
