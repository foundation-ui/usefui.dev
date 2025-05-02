"use client";

import React from "react";

import { CardBody } from "@/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { format, formatDistanceToNow } from "date-fns";
import { Divider } from "@foundation-ui/components";

function LibraryTimestamps({
  createdAt,
  updatedAt,
}: {
  createdAt: string | null;
  updatedAt: string | null;
}) {
  return (
    <CardBody className="p-medium-60 grid g-medium-30 m-b-large-10">
      <hgroup className="flex align-center justify-between">
        <h6 className="fs-medium-10">Timestamps</h6>
        <Icon>
          <PixelIcon.Clock />
        </Icon>
      </hgroup>
      <Divider className="m-y-medium-30" />
      <footer>
        <p className="fs-medium-10">
          <span className="opacity-default-30">Created At:</span>&nbsp;
          {format(Number(createdAt), "dd/MM/yyyy")}
        </p>
        <p className="fs-medium-10">
          <span className="opacity-default-30">Last Update:</span>&nbsp;
          {formatDistanceToNow(new Date(Number(updatedAt)), {
            addSuffix: true,
            includeSeconds: true,
          })}
        </p>
      </footer>
    </CardBody>
  );
}

export default LibraryTimestamps;
