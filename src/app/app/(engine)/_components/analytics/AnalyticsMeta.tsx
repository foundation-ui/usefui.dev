/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { TextMuted } from "@/components";
import { CalculateJsonSize, countColorTokens, countScaleTokens } from "@/utils";

function AnalyticsMeta({ data }: { data: string }) {
  const lib = JSON.parse(String(data));
  const size = CalculateJsonSize(data);

  const colorCount = countColorTokens(lib?.design_tokens?.color);
  const fontSizeCount = countScaleTokens(lib?.design_tokens?.fontsize);
  const measurementCount = countScaleTokens(lib?.design_tokens?.measurement);
  const opacityCount = countScaleTokens(lib?.design_tokens?.opacity);
  const depthCount = countScaleTokens(lib?.design_tokens?.depth);

  const totalTokens =
    colorCount + fontSizeCount + measurementCount + opacityCount + depthCount;

  return (
    <div className="flex align-center g-medium-30 p-y-small-30">
      <TextMuted className="fs-medium-10 opacity-default-30">
        {size.kilobytes.toFixed(2)}&nbsp;KB
      </TextMuted>
      <TextMuted className="fs-medium-10 opacity-default-10">/</TextMuted>
      <TextMuted className="fs-medium-10 opacity-default-30">
        {totalTokens}&nbsp;Tokens
      </TextMuted>
    </div>
  );
}

export default AnalyticsMeta;
