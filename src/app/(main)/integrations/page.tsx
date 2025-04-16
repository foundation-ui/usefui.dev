"use client";

import React from "react";

import { Badge } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function IntegrationsPage() {
  return (
    <section className="w-100 h-100 p-medium-60">
      <Badge variant="warning">
        <Icon fill="var(--color-orange)">
          <PixelIcon.Alert />
        </Icon>
        Work in Progress
      </Badge>
    </section>
  );
}

export default IntegrationsPage;
