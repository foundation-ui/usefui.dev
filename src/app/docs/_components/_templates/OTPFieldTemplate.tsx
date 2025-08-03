"use client";

import React from "react";
import { OTPField } from "@foundation-ui/components";

function OTPFieldTemplate() {
  return (
    <div className="grid align-center justify-center g-medium-60 p-t-large-30 p-x-medium-60">
      <OTPField length={6} onComplete={(value: string) => console.log(value)}>
        <OTPField.Group>
          {Array.from({ length: 6 }).map((_, index) => (
            <OTPField.Slot key={index} index={index} />
          ))}
        </OTPField.Group>
      </OTPField>
    </div>
  );
}

export default OTPFieldTemplate;
