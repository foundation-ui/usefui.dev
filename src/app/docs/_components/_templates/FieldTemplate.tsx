"use client";

import { Field } from "@foundation-ui/components";
import React from "react";

function FieldTemplate() {
  return (
    <div className="grid align-center justify-center g-medium-60 p-t-large-30 p-x-medium-60">
      <Field.Root>
        <Field.Wrapper>
          <Field.Label htmlFor="demo-field">Label</Field.Label>
          <Field
            name="demo-field"
            variant="secondary"
            placeholder="Placeholder.."
          />
          <Field.Meta variant="hint">Field meta</Field.Meta>
        </Field.Wrapper>
      </Field.Root>
      <Field.Root>
        <Field.Wrapper>
          <Field.Label htmlFor="demo-field-2">Label</Field.Label>
          <Field
            name="demo-field-2"
            variant="secondary"
            placeholder="Placeholder.."
            error="Error"
          />
          <Field.Meta variant="hint">Field meta</Field.Meta>
        </Field.Wrapper>
      </Field.Root>
    </div>
  );
}

export default FieldTemplate;
