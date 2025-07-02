"use client";

import React from "react";
import { Dialog, Divider, Portal } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function DialogTemplate() {
  return (
    <Dialog.Root>
      <div className="flex align-center justify-center w-100 h-100 p-t-large-30 p-x-medium-60">
        <Dialog.Trigger variant="border" sizing="large">
          @foundation-ui
        </Dialog.Trigger>
      </div>

      <Portal container="portal-container">
        <Dialog sizing="small">
          <Dialog.Menu className="flex justify-between w-100">
            <Dialog.Control variant="ghost">
              <Icon>
                <PixelIcon.Close />
              </Icon>
            </Dialog.Control>
          </Dialog.Menu>

          <p className="fs-medium-20">@foundation-ui</p>
          <Divider className="m-y-medium-60" />
          <p className="fs-medium-10 opacity-default-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            distinctio nemo delectus in ex. Sed quam labore ut quae dicta
            aperiam delectus numquam alias reiciendis? Dolore placeat
            repellendus voluptas et.
          </p>
        </Dialog>
        <Dialog.Overlay closeOnInteract />
      </Portal>
    </Dialog.Root>
  );
}

export default DialogTemplate;
