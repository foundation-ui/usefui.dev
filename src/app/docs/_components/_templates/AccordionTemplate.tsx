"use client";

import React from "react";

import { Accordion, Divider } from "@usefui/components";
import { Icon } from "@usefui/icons";

function AccordionTemplate() {
  return (
    <Accordion.Root>
      <Accordion
        className="grid g-medium-30 p-t-large-30 p-x-medium-60"
        style={{ maxWidth: "var(--breakpoint-mobile)", margin: "0 auto" }}
      >
        <div className="grid g-medium-30">
          <Accordion.Trigger
            value="info"
            className="w-100 flex justify-between align-center"
          >
            Informations
            <Icon>
              <Icon.ChevronSelectorVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content value="info">
            <p className="fs-medium-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              quidem culpa asperiores. Suscipit, iusto consectetur.
            </p>
            <br />
            <i className="fs-medium-10 opacity-default-60">
              Iure corrupti eos non cupiditate architecto totam fuga suscipit
              fugiat officiis quasi, aperiam ad debitis.
            </i>
          </Accordion.Content>
        </div>
        <Divider />
        <div className="grid g-medium-30">
          <Accordion.Trigger
            value="feat"
            className="w-100 flex justify-between align-center"
          >
            Features
            <Icon>
              <Icon.ChevronSelectorVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content value="feat">
            <p className="fs-medium-10">
              Iure corrupti eos non cupiditate architecto totam fuga suscipit
              fugiat officiis quasi, aperiam ad debitis.
            </p>
          </Accordion.Content>
        </div>
        <Divider />
        <div className="grid g-medium-30">
          <Accordion.Trigger
            value="requests"
            className="w-100 flex justify-between align-center"
          >
            Requests
            <Icon>
              <Icon.ChevronSelectorVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content value="requests">
            <i className="fs-medium-10 opacity-default-60">
              Iure corrupti eos non cupiditate architecto totam fuga suscipit
              fugiat officiis quasi, aperiam ad debitis.
            </i>
          </Accordion.Content>
        </div>
      </Accordion>
    </Accordion.Root>
  );
}

export default AccordionTemplate;
