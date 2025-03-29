"use client";

import React from "react";

import { DropdownMenu, Tooltip } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

function FunctionIcons({ active }: { active: string[] }) {
  console.log(active.includes("Test"));
  return (
    <span className="flex align-center g-medium-30">
      <Tooltip content="Color">
        <Icon fillOpacity={active.includes("Color") ? 1 : 0.1}>
          <Icon.Color />
        </Icon>
      </Tooltip>
      <Tooltip content="FontSize">
        <Icon fillOpacity={active.includes("FontSize") ? 1 : 0.1}>
          <Icon.FontSize />
        </Icon>
      </Tooltip>
      <Tooltip content="Measurement">
        <Icon fillOpacity={active.includes("Measurement") ? 1 : 0.1}>
          <Icon.Measurement />
        </Icon>
      </Tooltip>
      <Tooltip content="Depth">
        <Icon fillOpacity={active.includes("Depth") ? 1 : 0.1}>
          <Icon.Depth />
        </Icon>
      </Tooltip>
      <Tooltip content="Opacity">
        <Icon fillOpacity={active.includes("Opacity") ? 1 : 0.1}>
          <Icon.Opacity />
        </Icon>
      </Tooltip>
    </span>
  );
}

function FunctionSelector() {
  const fns = [
    {
      active: ["Color"],
      label: "Color",
      fn: () => console.log("Generate Color"),
    },
    {
      active: ["FontSize", "Measurement"],
      label: "Modular Scale",
      fn: () => console.log("Generate Modular Scale"),
    },
    {
      active: ["Depth", "Opacity"],
      label: "Sequence",
      fn: () => console.log("Generate Sequence"),
    },
    {
      active: ["Color", "FontSize", "Measurement", "Depth", "Opacity"],
      label: "Library",
      fn: () => console.log("Generate Library"),
    },
  ];

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost">
          <span className="fs-medium-10">Generate Library</span>
          <Icon>
            <Icon.DoubleChevron />
          </Icon>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sizing="large">
          {fns.map((fn, key) => (
            <DropdownMenu.Item
              radio
              className="flex align-center g-medium-30 justify-between "
              key={key}
            >
              {fn.label}
              <FunctionIcons active={fn.active} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default FunctionSelector;
