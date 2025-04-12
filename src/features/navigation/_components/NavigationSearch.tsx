"use client";

import React from "react";
import styled from "styled-components";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Field } from "@foundation-ui/components";

const FullWillSearch = styled(Field)`
  width: 100%;
  font-size: var(--fontsize-medium-10) !important;
  cursor: text !important;
`;

function NavigationSearch() {
  return (
    <Field.Root>
      <Field.Label optional className="flex align-center w-100 ">
        <Icon fillOpacity={0.6}>
          <PixelIcon.Search />
        </Icon>
        <FullWillSearch
          variant="ghost"
          sizing="small"
          placeholder="Search in your library..."
          disabled
        />
      </Field.Label>
    </Field.Root>
  );
}

export default NavigationSearch;
