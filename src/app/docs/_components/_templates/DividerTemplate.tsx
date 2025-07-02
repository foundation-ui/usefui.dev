"use client";

import React from "react";
import { Divider } from "@foundation-ui/components";

function DividerTemplate() {
  return (
    <div className="w-100 p-t-large-30 p-x-medium-60">
      <p className="fs-medium-20">@foundation-ui</p>
      <Divider className="m-y-medium-60" />
      <p className="fs-medium-10 opacity-default-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non
        assumenda aliquam similique esse quisquam a, odio praesentium, optio
        sunt architecto itaque fuga et neque repellendus placeat expedita
        maiores voluptatum.
      </p>
    </div>
  );
}

export default DividerTemplate;
