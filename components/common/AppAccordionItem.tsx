"use client";

import React from "react";
import styled from "styled-components";

import { Accordion } from "@foundation-ui/components";

const Item = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--measurement-medium-30);

  width: 100%;
  border-radius: var(--measurement-medium-20);
  background-color: transparent;

  user-select: none;
  transition: all ease-in-out 0.2s;

  &:hover,
  &:focus {
    background-color: var(--font-color-alpha-10);
  }
`;

type AppAccordionItemProperties = {
  label: string;
  icon: React.ReactNode;
  value: string;
  defaultOpen?: boolean;
  actions: React.ReactNode;
  content: React.ReactNode;
};

function AppAccordionItem({
  label,
  icon,
  value,
  defaultOpen,
  actions,
  content,
}: AppAccordionItemProperties) {
  return (
    <Accordion.Root>
      <div className="h-auto">
        <Item>
          <Accordion className="flex align-center justify-between w-100">
            <div className="flex align-center g-medium-10">
              <Accordion.Trigger value={value} variant="ghost">
                {icon}
                {label}
              </Accordion.Trigger>
            </div>
            <div className="flex align-center g-medium-10">{actions}</div>
          </Accordion>
        </Item>

        <Accordion.Content
          defaultOpen={defaultOpen}
          value={value}
          className="p-y-medium-30"
        >
          {content}
        </Accordion.Content>
      </div>
    </Accordion.Root>
  );
}

export default AppAccordionItem;
