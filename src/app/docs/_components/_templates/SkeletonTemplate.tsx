"use client";

import React from "react";
import { Skeleton } from "@usefui/components";

function SkeletonTemplate() {
  return (
    <div className="grid align-center g-medium-60 justify-center p-t-large-30 p-x-medium-60">
      <div className="flex align-center justify-center g-medium-30 ">
        <Skeleton sizing="small" />
        <Skeleton sizing="medium" />
        <Skeleton sizing="large" />
      </div>
      <div className="flex align-center justify-center g-medium-30">
        <Skeleton shape="square" />
        <Skeleton shape="smooth" />
        <Skeleton shape="round" />
      </div>
    </div>
  );
}

export default SkeletonTemplate;
