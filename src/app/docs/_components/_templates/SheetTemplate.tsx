"use client";

import React from "react";
import { Sheet, Divider } from "@usefui/components";
import { Icon } from "@usefui/icons";

function SheetTemplate() {
  return (
    <Sheet.Root>
      <div className="grid g-medium-10 align-center justify-center w-100 h-100 p-t-large-30 p-x-medium-60">
        <Sheet.Trigger variant="border" sizing="large">
          @usefui
        </Sheet.Trigger>
        <div className="w-100 flex justify-center">
          <small className="opacity-default-10">{"Ctrl + $"}</small>
        </div>
      </div>

      <Sheet sizing="medium" shortcut bindkey="ctrlKey" hotkey="$">
        <div className="flex justify-between">
          <p className="fs-medium-20">@usefui</p>

          <Sheet.Trigger variant="ghost">
            <Icon>
              <Icon.Remove />
            </Icon>
          </Sheet.Trigger>
        </div>

        <Divider className="m-y-medium-60" />

        <p className="fs-medium-10 opacity-default-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          distinctio nemo delectus in ex. Sed quam labore ut quae dicta aperiam
          delectus numquam alias reiciendis? Dolore placeat repellendus voluptas
          et.
        </p>
      </Sheet>
    </Sheet.Root>
  );
}

export default SheetTemplate;
