"use client";

import React from "react";
import { Avatar } from "@foundation-ui/components";

function AvatarTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <div className="flex align-center g-medium-10 justify-center">
        {["small", "medium", "large"].map((size, key) => (
          <Avatar
            key={key}
            sizing={size as "small" | "medium" | "large"}
            src="https://avatars.githubusercontent.com/u/59123840?s=96&v=4"
          />
        ))}
      </div>
      <div className="flex align-center g-medium-10 justify-center">
        {["online", "away", "busy", "offline"].map((status, key) => (
          <Avatar
            key={key}
            status={status as "online" | "away" | "busy" | "offline"}
            style={{ background: "var(--font-color-alpha-10)" }}
          >
            <small>UI</small>
          </Avatar>
        ))}
      </div>
    </div>
  );
}

export default AvatarTemplate;
