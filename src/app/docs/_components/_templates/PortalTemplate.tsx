"use client";

import React from "react";
import { Button, Portal } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";
function PortalTemplate() {
  const [container, setContainer] = React.useState<string>("portal-demo-1");

  const handlePortalChange = () => {
    if (container === "portal-demo-1") setContainer("portal-demo-2");
    if (container === "portal-demo-2") setContainer("portal-demo-1");
  };
  return (
    <React.Fragment>
      <div className="w-100 h-100 p-t-large-30 p-x-medium-60">
        <hgroup className="flex align-center justify-center g-medium-30">
          <p className="fs-medium-20 opacity-default-60">Click the Downasaur</p>

          <Portal container={container}>
            <Button variant="ghost" onClick={handlePortalChange}>
              <Icon>
                <PixelIcon.Downasaur />
              </Icon>
            </Button>
          </Portal>
        </hgroup>
      </div>

      <div className="flex align-center justify-center w-100 h-100 p-medium-60 g-large-10">
        <div id="portal-demo-1" className="flex align-center g-medium-30">
          <small className="opacity-default-10">#portal-demo-1</small>
        </div>
        <div id="portal-demo-2" className="flex align-center g-medium-30">
          <small className="opacity-default-10">#portal-demo-2</small>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortalTemplate;
