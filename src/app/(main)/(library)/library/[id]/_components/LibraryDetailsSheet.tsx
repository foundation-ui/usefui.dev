"use client";

import React from "react";

import { Divider, Sheet, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetailsSheet({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <Sheet.Root>
      <Tooltip content="Details">
        <Sheet.Trigger variant="ghost">
          <Icon>
            <PixelIcon.LayoutSidebarRight />
          </Icon>
        </Sheet.Trigger>
      </Tooltip>

      <Sheet side="right" sizing="medium">
        <hgroup className="flex justify-between align-center g-medium-10 m-b-medium-60">
          <h6 className="fs-medium-20">{data.name} details</h6>
          <Sheet.Trigger>
            <Icon>
              <PixelIcon.Close />
            </Icon>
          </Sheet.Trigger>
        </hgroup>
        <Divider className="m-b-medium-60" />
        <p>id:&nbsp;{data.id}</p>
        <p>creatorId:&nbsp;{data.creatorId}</p>
        <Divider className="m-b-medium-60" />
        <p>createdAt:&nbsp;{data.createdAt}</p>
        <p>updatedAt:&nbsp;{data.updatedAt}</p>
        <Divider className="m-b-medium-60" />

        <p>name:&nbsp;{data.name}</p>
        <p>title:&nbsp;{data.title}</p>
        <p>description:&nbsp;{data.description}</p>
      </Sheet>
    </Sheet.Root>
  );
}

export default LibraryDetailsSheet;
