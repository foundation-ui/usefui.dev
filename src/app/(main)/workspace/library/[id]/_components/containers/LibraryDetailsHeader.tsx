"use client";

import React from "react";
import styled from "styled-components";

import DeleteAction from "../triggers/DeleteAction";
import LibraryDetailsSheet from "./LibraryDetailsSheet";

import type { libraries_table as librariesSchema } from "@/server/db/schema";
import { HeroSubtitle } from "@/components";

const HeaderContainer = styled.header`
  flex-wrap: wrap;
`;

function LibraryDetailsHeader({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <HeaderContainer className="flex justify-between align-end g-medium-60">
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
    </HeaderContainer>
  );
}

export default LibraryDetailsHeader;
