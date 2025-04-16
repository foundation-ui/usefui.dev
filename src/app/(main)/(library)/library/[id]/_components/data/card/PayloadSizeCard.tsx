"use client";

import React from "react";

import { CardBody } from "@/components";
import { Divider } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { CalculateJsonSize } from "@/utils";
import type { libraries_table as librariesSchema } from "@/server/db/schema";

function PayloadSizeCard({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  const size = CalculateJsonSize(data.library);

  return (
    <CardBody className="p-medium-60">
      <hgroup>
        <div className="flex justify-between align-center g-medium-30">
          <span className="fs-medium-10 opacity-default-60">Payload Size</span>
          <Icon>
            <PixelIcon.CloudDownload />
          </Icon>
        </div>
        <h3 className="fs-medium-20">{size.kilobytes.toFixed(2)}&nbsp;KB</h3>
      </hgroup>
      <Divider className="m-y-medium-60" />
      <p className="fs-medium-10 opacity-default-30">
        Total size of the library
      </p>
    </CardBody>
  );
}

export default PayloadSizeCard;
