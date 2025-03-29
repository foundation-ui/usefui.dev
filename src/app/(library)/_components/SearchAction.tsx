"use client";

import React from "react";

import { Icon } from "@foundation-ui/icons";
import { Divider, Field } from "@foundation-ui/components";

function SearchAction() {
  return (
    <header>
      <Field.Root>
        <Field.Label
          optional
          className="flex align-center g-medium-10 w-100 p-x-medium-60 p-t-medium-30"
        >
          <Icon fillOpacity={0.6}>
            <Icon.Search />
          </Icon>
          <Field
            variant="ghost"
            placeholder="Search in your library..."
            className="fs-medium-10"
            disabled
          />
        </Field.Label>
      </Field.Root>
      <Divider />
    </header>
  );
}

export default SearchAction;
