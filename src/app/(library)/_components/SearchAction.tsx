"use client";

import React from "react";
import styled from "styled-components";

import { Icon } from "@foundation-ui/icons";
import { Divider, Field } from "@foundation-ui/components";

const NoMarginDivider = styled(Divider)`
  margin: 0 !important;
`;
const FullWillSearch = styled(Field)`
  width: 100%;
  font-size: var(--fontsize-medium-10) !important;
`;
function SearchAction() {
  return (
    <header className="grid">
      <Field.Root>
        <Field.Label
          optional
          className="flex align-center g-medium-10 w-100 p-l-medium-30"
        >
          <Icon fillOpacity={0.6}>
            <Icon.Search />
          </Icon>
          <FullWillSearch
            variant="ghost"
            sizing="medium"
            placeholder="Search in your library..."
          />
        </Field.Label>
      </Field.Root>
      <NoMarginDivider />
    </header>
  );
}

export default SearchAction;
