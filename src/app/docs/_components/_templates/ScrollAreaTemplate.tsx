"use client";

import React from "react";
import { ScrollArea } from "@usefui/components";

function ScrollAreaTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <ScrollArea
        className="w-100 h-100"
        style={{ maxHeight: 124, maxWidth: 248, margin: "0 auto" }}
        scrollbar
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta autem
        incidunt voluptatum dignissimos, aperiam nostrum, explicabo adipisci
        ipsum magnam iste id accusamus, sed inventore ex eaque? Vitae iusto odit
        temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Dicta autem incidunt voluptatum dignissimos, aperiam nostrum, explicabo
        adipisci ipsum magnam iste id accusamus, sed inventore ex eaque? Vitae
      </ScrollArea>
    </div>
  );
}

export default ScrollAreaTemplate;
