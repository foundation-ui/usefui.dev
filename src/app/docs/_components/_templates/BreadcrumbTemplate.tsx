"use client";

import React from "react";
import { Breadcrumb } from "@usefui/components";

function BreadcrumbTemplate() {
  return (
    <div className="flex align-center justify-center g-medium-30 p-t-large-30 p-x-medium-60 flex">
      <Breadcrumb path={"/demo/path/current-path"}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbTemplate;
