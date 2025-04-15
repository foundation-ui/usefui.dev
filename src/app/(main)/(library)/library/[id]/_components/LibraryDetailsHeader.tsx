"use client";

import React from "react";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Tooltip } from "@foundation-ui/components";

import { format, formatDistanceToNow } from "date-fns";

function LibraryDetailsHeader({
  createdAt,
  updatedAt,
}: {
  createdAt: string | null;
  updatedAt: string | null;
}) {
  return (
    <hgroup className="flex justify-start align-center g-medium-60">
      <Tooltip content="Created At">
        <div className="flex align-center g-medium-10">
          <Icon>
            <PixelIcon.Calendar />
          </Icon>
          <span className="opacity-default-60 fs-medium-10">
            {format(Number(createdAt), "dd/MM/yyyy")}
          </span>
        </div>
      </Tooltip>
      <Tooltip content="Updated At">
        <div className="flex align-center g-medium-10">
          <Icon>
            <PixelIcon.Clock />
          </Icon>
          <span className="opacity-default-60 fs-medium-10">
            {formatDistanceToNow(new Date(Number(updatedAt)), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </span>
        </div>
      </Tooltip>
    </hgroup>
  );
}

export default LibraryDetailsHeader;
