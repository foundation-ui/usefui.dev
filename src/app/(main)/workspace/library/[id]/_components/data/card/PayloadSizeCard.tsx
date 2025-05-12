"use client";

import React from "react";

import { Badge } from "@foundation-ui/components";
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
    <Badge variant="border" shape="round">
      <Icon>
        <PixelIcon.CloudDownload />
      </Icon>
      {size.kilobytes.toFixed(2)}&nbsp;KB
    </Badge>
  );
}

export default PayloadSizeCard;
