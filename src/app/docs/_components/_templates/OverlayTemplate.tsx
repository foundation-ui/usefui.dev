"use client";

import React from "react";
import { Button, Overlay } from "@usefui/components";

function OverlayTemplate() {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60 align-center justify-center">
      <Button variant="border" sizing="large" onClick={() => setShow(true)}>
        @usefui
      </Button>
      <Overlay
        visible={show}
        // closeOnInteract
        onClick={() => setShow(false)}
        className="flex align-center justify-center"
      >
        Click to close the overlay
      </Overlay>
    </div>
  );
}

export default OverlayTemplate;
