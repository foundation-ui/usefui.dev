"use client";

import React from "react";

import { PrivacyField } from "@usefui/components";
import { Icon } from "@usefui/icons";

function PrivacyFieldTemplate() {
  return (
    <div className="grid align-center justify-center g-medium-60 p-t-large-30 p-x-medium-60 w-100">
      <PrivacyField
        value="HelloWord"
        textIcon={
          <Icon>
            <Icon.Eye />
          </Icon>
        }
        passwordIcon={
          <Icon>
            <Icon.EyeOff />
          </Icon>
        }
      />
    </div>
  );
}

export default PrivacyFieldTemplate;
