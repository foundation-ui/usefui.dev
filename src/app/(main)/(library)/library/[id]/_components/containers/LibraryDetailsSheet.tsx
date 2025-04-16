"use client";

import React from "react";

import LibraryTimestamps from "../data/card/LibraryTimestamps";
import UpdateLibraryForm from "../forms/UpdateLibraryForm";

import { Divider, Sheet } from "@foundation-ui/components";
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
        <span className="fs-medium-10">Settings</span>
        <Icon>
          <PixelIcon.SlidersVertical />
        </Icon>
      </Sheet.Trigger>

      <Sheet side="right" sizing="medium">
        <hgroup className="flex justify-between align-start g-large-10 m-b-medium-60">
          <div>
            <h3 className="fs-medium-20">Library details</h3>
            <p className="fs-medium-10 opacity-default-60">
              Make changes to the library details here. Click save when
              you&apos;re done.
            </p>
          </div>

          <Sheet.Trigger>
            <Icon>
              <PixelIcon.Close />
            </Icon>
          </Sheet.Trigger>
        </hgroup>
        <Divider className="m-y-medium-60 " />
        <LibraryTimestamps
          createdAt={data.createdAt}
          updatedAt={data.updatedAt}
        />
        <UpdateLibraryForm data={data} />
      </Sheet>
    </Sheet.Root>
  );
}

export default LibraryDetailsSheet;
