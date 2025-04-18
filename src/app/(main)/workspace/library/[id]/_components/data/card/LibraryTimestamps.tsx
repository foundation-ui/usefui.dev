"use client";

import React from "react";

import { CardBody } from "@/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { format, formatDistanceToNow } from "date-fns";

function LibraryTimestamps({
  createdAt,
  updatedAt,
}: {
  createdAt: string | null;
  updatedAt: string | null;
}) {
  return (
    <CardBody className="grid g-medium-10 p-medium-60 m-b-large-10">
      <div className="flex align-center g-medium-10 m-b-medium-30">
        <Icon>
          <PixelIcon.Clock />
        </Icon>
        <h6 className="fs-medium-20">Timestamps</h6>
      </div>
      <span className="fs-medium-10">
        <b className="opacity-default-60">Created At:</b>&nbsp;
        {format(Number(createdAt), "dd/MM/yyyy")}
      </span>
      <span className="fs-medium-10">
        <b className="opacity-default-60">Last Update:</b>&nbsp;
        {formatDistanceToNow(new Date(Number(updatedAt)), {
          addSuffix: true,
          includeSeconds: true,
        })}
      </span>
    </CardBody>
  );
}

export default LibraryTimestamps;
