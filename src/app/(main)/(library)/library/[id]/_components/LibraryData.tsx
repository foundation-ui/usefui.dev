"use client";

import React from "react";

import DeleteAction from "./DeleteAction";

import { MaxWidthContainer } from "@/components";
import { TextMuted } from "@/components/shared/TextMuted";
import { Divider, Sheet } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryData({ data }: { data: typeof librariesSchema.$inferSelect }) {
  return (
    <MaxWidthContainer className="g-medium-30 w-100 p-large-10">
      <header className="flex justify-between align-end g-medium-30">
        <hgroup>
          <h1 className="fs-large-10 m-b-medium-10">{data.title}</h1>
          <p className="fs-medium-20 opacity-default-30">
            {data.description === "" ? "No description" : data.description}
          </p>
        </hgroup>
        <Sheet.Root>
          <div className="flex align-center g-medium-60">
            <Sheet.Trigger variant="ghost">
              <span className="fs-medium-10">Details</span>
              <Icon>
                <PixelIcon.LayoutSidebarRight />
              </Icon>
            </Sheet.Trigger>
            <TextMuted className="opacity-default-10">|</TextMuted>
            <DeleteAction libraryId={Number(data.id)} />
          </div>

          <Sheet side="right" sizing="medium">
            <p>id:&nbsp;{data.id}</p>
            <p>creatorId:&nbsp;{data.creatorId}</p>
            <p>name:&nbsp;{data.name}</p>
            <p>title:&nbsp;{data.title}</p>
            <p>description:&nbsp;{data.description}</p>
            <p>createdAt:&nbsp;{data.createdAt}</p>
            <p>updatedAt:&nbsp;{data.updatedAt}</p>
          </Sheet>
        </Sheet.Root>
      </header>

      <Divider className="m-b-medium-60" />
    </MaxWidthContainer>
  );
}

export default LibraryData;
