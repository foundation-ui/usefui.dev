"use client";

import { Divider, Page, ScrollArea } from "@usefui/components";
import React from "react";

function PageTemplate() {
  return (
    <div className="w-100 h-100 flex" style={{ position: "relative" }}>
      <Page.Tools side="left" sizing="small" />
      <Page.Content className="h-100">
        <Page.Navigation>
          <p className="fs-medium-10 opacity-default-30">Navigation</p>
        </Page.Navigation>
        <Page.Menu>
          <p className="fs-medium-10 opacity-default-30">Menu</p>
        </Page.Menu>
        <ScrollArea className="h-100 p-large-10" style={{ maxHeight: 292 }}>
          <h6>@usefui</h6>
          <Divider className="m-y-medium-60" />
          <p className="fs-medium-20 opacity-default-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vitae incidunt libero veniam rerum molestias atque hic enim!
            Incidunt soluta repellat iusto, adipisci pariatur veniam quo vitae
            saepe? Sed, accusamus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur vitae incidunt libero veniam rerum
            molestias atque hic enim! Incidunt soluta repellat iusto, adipisci
            pariatur veniam quo vitae saepe? Sed, accusamus. saepe?
          </p>
          <br />
          <p className="fs-medium-20 opacity-default-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vitae incidunt libero veniam rerum molestias atque hic enim!
            Incidunt soluta repellat iusto, adipisci pariatur veniam quo vitae
            saepe? Sed, accusamus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur vitae incidunt libero veniam rerum
            molestias atque hic enim! Incidunt soluta repellat iusto, adipisci
            pariatur veniam quo vitae saepe? Sed, accusamus. saepe?
          </p>
        </ScrollArea>
      </Page.Content>
      <Page.Tools side="right" sizing="large" />
    </div>
  );
}

export default PageTemplate;
