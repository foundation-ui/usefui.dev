/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { Badge } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { countColorTokens, countScaleTokens } from "@/utils";
import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibrarySizeCard({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  const lib = JSON.parse(String(data.library));

  const colorCount = countColorTokens(lib?.design_tokens?.color);
  const fontSizeCount = countScaleTokens(lib?.design_tokens?.fontsize);
  const measurementCount = countScaleTokens(lib?.design_tokens?.measurement);
  const opacityCount = countScaleTokens(lib?.design_tokens?.opacity);
  const depthCount = countScaleTokens(lib?.design_tokens?.depth);
  const totalTokens =
    colorCount + fontSizeCount + measurementCount + opacityCount + depthCount;

  return (
    <Badge variant="border" shape="round">
      <Icon>
        <PixelIcon.ChevronsHorizontal />
      </Icon>
      <b>{totalTokens}</b>
      Design Tokens
    </Badge>
  );
}

export default LibrarySizeCard;
