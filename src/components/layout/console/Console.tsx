"use client";

import React from "react";
import styled from "styled-components";

import { Button, Field, Toolbar } from "@foundation-ui/components";
import { Icon } from "@/components/common/Icons";

const ConsoleWrapper = styled(Toolbar)`
  border: none !important;
  padding: var(--measurement-medium-60) 0 !important;

  menu {
    align-self: center !important;
  }
`;
const ConsoleBody = styled.div`
  border-top: var(--measurement-small-30) solid var(--font-color-alpha-10);
  margin-top: var(--measurement-medium-30);
  padding: var(--measurement-medium-30) 0;
  height: 100%;
`;
const NoInteractText = styled.span`
  user-select: none;
  pointer-events: none;
`;
function Console() {
  return (
    <Toolbar.Root>
      <ConsoleWrapper
        side="bottom"
        sizing="large"
        height="display"
        defaultOpen={false}
      >
        <Toolbar.Item
          showfirstchild
          className="flex align-center justify-between"
        >
          <Toolbar.Trigger variant="ghost">
            <Icon viewBox="0 0 16 16">
              <Icon.Terminal />
            </Icon>
          </Toolbar.Trigger>

          <div className="flex align-center g-medium-30">
            <form>
              <Field.Root>
                <Field
                  className="fs-medium-10"
                  placeholder="Filter..."
                  variant="secondary"
                  sizing="small"
                />
              </Field.Root>
            </form>
            <Button variant="ghost" sizing="small">
              <Icon>
                <Icon.Deleted />
              </Icon>
            </Button>
            <NoInteractText className="fs-medium-20 opacity-default-10">
              |
            </NoInteractText>
            <Toolbar.Trigger variant="ghost">
              <Icon>
                <Icon.DoubleChevron />
              </Icon>
            </Toolbar.Trigger>
          </div>
        </Toolbar.Item>

        <Toolbar.Section>
          <ConsoleBody>
            <p className="fs-medium-10 opacity-default-30">
              No logs available to display...
            </p>
          </ConsoleBody>
        </Toolbar.Section>
      </ConsoleWrapper>
    </Toolbar.Root>
  );
}

export default Console;
