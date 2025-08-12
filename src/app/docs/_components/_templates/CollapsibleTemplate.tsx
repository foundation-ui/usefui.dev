"use client";

import React from "react";
import { Collapsible, Divider } from "@usefui/components";

function CollapsibleTemplate() {
  return (
    <Collapsible.Root>
      <Collapsible className="grid g-medium-30 p-t-large-30 p-x-medium-60">
        <Collapsible.Trigger>@usefui</Collapsible.Trigger>
        <Divider />
        <Collapsible.Content showFirstChild>
          <Collapsible.Trigger>Components</Collapsible.Trigger>
          <Collapsible.Trigger>Tokens</Collapsible.Trigger>
          <Collapsible.Trigger>Core</Collapsible.Trigger>
          <Collapsible.Trigger>Styles</Collapsible.Trigger>
          <Collapsible.Trigger>Hooks</Collapsible.Trigger>
          <Collapsible.Trigger>Icons</Collapsible.Trigger>
          <Collapsible.Trigger>Analytics</Collapsible.Trigger>
        </Collapsible.Content>
      </Collapsible>
    </Collapsible.Root>
  );
}

export default CollapsibleTemplate;
