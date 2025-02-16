"use client";

import React from "react";

import AppAccordionItem from "./AppAccordionItem";

import { Button, ScrollArea, Toolbar } from "@foundation-ui/components";
import { Icon } from "../..";

function AppSidebarSections() {
  return (
    <ScrollArea as={Toolbar.Section} className="w-100 p-medium-30">
      <div className="grid g-medium-60">
        <AppAccordionItem
          defaultOpen
          value="collection"
          label="Collection"
          icon={
            <Icon>
              <Icon.Models />
            </Icon>
          }
          actions={
            <React.Fragment>
              <Button variant="ghost">
                <Icon>
                  <Icon.Add />
                </Icon>
              </Button>
              <Button variant="ghost">
                <Icon>
                  <Icon.More />
                </Icon>
              </Button>
            </React.Fragment>
          }
          content={
            <div className="grid g-medium-30">
              {[1, 2, 3, 4].map((item) => (
                <Button variant="ghost" style={{ width: "100%" }} key={item}>
                  <span className="flex align-center justify-start p-l-large-10  g-medium-10 w-100 fs-medium-20">
                    Untitled-{item}
                  </span>
                  <span className="p-r-medium-40">
                    <Icon>
                      <Icon.Code />
                    </Icon>
                  </span>
                </Button>
              ))}
            </div>
          }
        />
        <AppAccordionItem
          defaultOpen
          icon={
            <Icon>
              <Icon.Archive />
            </Icon>
          }
          value="drafts"
          label="Drafts"
          actions={
            <React.Fragment>
              <Button variant="ghost">
                <Icon>
                  <Icon.Add />
                </Icon>
              </Button>
              <Button variant="ghost">
                <Icon>
                  <Icon.More />
                </Icon>
              </Button>
            </React.Fragment>
          }
          content={
            <div className="grid g-medium-10">
              <span className="opacity-default-30 p-l-large-10 fs-medium-20">
                No draft yet..
              </span>
            </div>
          }
        />
      </div>
    </ScrollArea>
  );
}

export default AppSidebarSections;
