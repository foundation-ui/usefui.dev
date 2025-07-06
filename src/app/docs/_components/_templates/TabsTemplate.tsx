"use client";

import React from "react";
import { Divider, Tabs } from "@foundation-ui/components";

function TabsTemplate() {
  return (
    <Tabs.Root>
      <Tabs
        defaultOpen="info"
        className="grid g-medium-30 p-t-large-30 p-x-medium-60"
        style={{ maxWidth: "var(--breakpoint-mobile)", margin: "0 auto" }}
      >
        <div className="flex align-center justify-start g-medium-60">
          <Tabs.Trigger value="info">Informations</Tabs.Trigger>
          <Tabs.Trigger value="features">Features</Tabs.Trigger>
        </div>
        <Divider />
        <div className="flex">
          <Tabs.Content value="info">
            <p className="fs-medium-10 opacity-default-60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              quidem culpa asperiores. Suscipit, iusto consectetur.
            </p>
          </Tabs.Content>
          <Tabs.Content value="features">
            <p className="fs-medium-10 opacity-default-60">
              Iure corrupti eos non cupiditate architecto totam fuga suscipit
              fugiat officiis quasi, aperiam ad debitis.
            </p>
          </Tabs.Content>
        </div>
      </Tabs>
    </Tabs.Root>
  );
}

export default TabsTemplate;
