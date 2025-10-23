/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import styled from "styled-components";

import { TextMuted } from "@/components";
import { CalculateJsonSize, countColorTokens, countScaleTokens } from "@/utils";
import { Toolbar, Tooltip } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const AnalyticsWrapper = styled(Toolbar)`
  padding: var(--measurement-medium-30) 0 !important;
  align-self: end !important;

  box-shadow: 0 0 var(--measurement-medium-50) var(--measurement-medium-10)
    var(--contrast-color);
  background: var(--contrast-color) !important;
  border: none !important;
  z-index: 1;
`;

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
    <Toolbar.Root>
      <AnalyticsWrapper
        side="bottom"
        sizing="medium"
        height="auto"
        defaultOpen={false}
      >
        <div className="flex align-center g-medium-30">
          <Tooltip content="File size">
            <Toolbar.Trigger
              variant="secondary"
              animation="reflective"
              sizing="small"
              id="toggle-console-trigger"
            >
              <span className="p-y-small-60 flex align-center justify-center">
                <Icon>
                  <PixelIcon.File />
                </Icon>
              </span>
            </Toolbar.Trigger>
          </Tooltip>
          <div className="flex align-center g-medium-10">
            <TextMuted className="fs-medium-10 opacity-default-30">
              {size.kilobytes.toFixed(2)}&nbsp;KB
            </TextMuted>
            <TextMuted className="fs-medium-10 opacity-default-10">/</TextMuted>
            <TextMuted className="fs-medium-10 opacity-default-30">
              {totalTokens}&nbsp;Tokens
            </TextMuted>
          </div>
        </div>
      </AnalyticsWrapper>
    </Toolbar.Root>
  );
}

export default AnalyticsMeta;
