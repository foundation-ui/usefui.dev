"use client";

import React from "react";
import { Button, Card } from "@usefui/components";

function CardTemplate() {
  return (
    <div className="p-medium-60 flex align-center justify-center ">
      <Card.Grid>
        <Card>
          <Card.Body className="h-100 p-b-large-10">
            <hgroup className="grid g-medium-30">
              <h6 className="fs-medium-40">Foundation UI</h6>
              <span className="fs-medium-20 flex align-center">
                Free&nbsp;
                <span className="opacity-default-30 fs-medium-10">/month</span>
              </span>
            </hgroup>
            <Button
              sizing="large"
              variant="secondary"
              animation="reflective"
              className="w-100"
            >
              Start building for free
            </Button>
          </Card.Body>
          <Card.Meta>@usefui</Card.Meta>
        </Card>
      </Card.Grid>
    </div>
  );
}

export default CardTemplate;
