/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { CardBody } from "@/components";
import { Divider } from "@foundation-ui/components";
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
    <CardBody className="p-medium-60">
      <hgroup>
        <div className="flex justify-between align-center g-medium-30">
          <span className="fs-medium-10 opacity-default-60">Total Tokens</span>
          <Icon>
            <PixelIcon.ChevronsHorizontal />
          </Icon>
        </div>
        <h3 className="fs-medium-20">{totalTokens}</h3>
      </hgroup>
      <Divider className="m-y-medium-60" />
      <p className="fs-medium-10 opacity-default-30">
        Breakdown of all token categories
      </p>
    </CardBody>
  );
}

export default LibrarySizeCard;
