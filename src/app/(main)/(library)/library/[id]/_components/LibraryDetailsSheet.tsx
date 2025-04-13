"use client";

import React from "react";

import { Sheet } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibraryDetailsSheet({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  return (
    <Sheet.Root>
      <Sheet.Trigger variant="ghost">
        <span className="fs-medium-10">Details</span>
        <Icon>
          <PixelIcon.LayoutSidebarRight />
        </Icon>
      </Sheet.Trigger>

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
  );
}

export default LibraryDetailsSheet;
