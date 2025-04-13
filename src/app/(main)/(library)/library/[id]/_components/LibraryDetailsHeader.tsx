"use client";

import React from "react";

import { TextMuted } from "@/components/shared/TextMuted";
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
      <p className="fs-medium-10">
        <TextMuted className="opacity-default-30">Created</TextMuted>
        &nbsp;
        <span className="opacity-default-60">
          {format(Number(createdAt), "dd/MM/yyyy")}
        </span>
      </p>
      <p className="fs-medium-10">
        <TextMuted className="opacity-default-30">Updated</TextMuted>
        &nbsp;
        <span className="opacity-default-60">
          {formatDistanceToNow(new Date(Number(updatedAt)), {
            addSuffix: true,
          })}
        </span>
      </p>
    </hgroup>
  );
}

export default LibraryDetailsHeader;
