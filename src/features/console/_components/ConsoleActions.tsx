"use client";

import React from "react";

import { TextMuted } from "@/components/shared/TextMuted";
import { Field, Tooltip, Button, Toolbar } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

function ConsoleActions() {
  return (
    <div className="flex align-center g-medium-30">
      <form>
        <Field.Root>
          <Field
            disabled
            className="fs-medium-10"
            placeholder="Filter..."
            variant="secondary"
            sizing="small"
          />
        </Field.Root>
      </form>
      <Tooltip content="Clear console">
        <Button variant="ghost" sizing="small" disabled>
          <Icon>
            <Icon.Deleted />
          </Icon>
        </Button>
      </Tooltip>

      <TextMuted className="fs-medium-20 opacity-default-10">|</TextMuted>

      <Toolbar.Trigger variant="ghost">
        <Icon>
          <Icon.DoubleChevron />
        </Icon>
      </Toolbar.Trigger>
    </div>
  );
}

export default ConsoleActions;
