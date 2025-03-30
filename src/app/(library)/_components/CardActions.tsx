"use client";

import React from "react";

import { Divider, DropdownMenu } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

function CardActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Icon>
            <Icon.More />
          </Icon>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sizing="medium">
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            <span className="fs-medium-10">Preview</span>
            <Icon>
              <Icon.Visible />
            </Icon>
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            <span className="fs-medium-10">Edit</span>
            <Icon>
              <Icon.UpdateData />
            </Icon>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            <span className="fs-medium-10">Delete</span>
            <Icon>
              <Icon.Deleted />
            </Icon>
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            <span className="fs-medium-10">Open Pull Request</span>
            <Icon viewBox="0 0 14 14">
              <Icon.Github />
            </Icon>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            <span className="fs-medium-10">Sync with S3 Bucket</span>
            <Icon viewBox="0 0 304 182">
              <Icon.Aws />
            </Icon>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default CardActions;
