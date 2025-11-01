"use client";

import React from "react";

import { PrivacyField } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

function PrivacyFieldTemplate() {
  return (
    <div className="grid align-center justify-center g-medium-60 p-t-large-30 p-x-medium-60 w-100">
      <PrivacyField
        value="HelloWord"
        textIcon={
          <Icon>
            <PixelIcon.Eye />
          </Icon>
        }
        passwordIcon={
          <Icon>
            <PixelIcon.EyeClosed />
          </Icon>
        }
      />
    </div>
  );
}

export default PrivacyFieldTemplate;
