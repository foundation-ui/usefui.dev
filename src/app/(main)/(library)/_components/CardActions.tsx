"use client";

import React from "react";
import Link from "next/link";

import { Divider, DropdownMenu } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

function CardActions({ libraryId }: { libraryId: string }) {
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
            radio
          >
            <Link
              href={`library/${libraryId}`}
              className="flex align-center w-100 justify-between"
              style={{ textDecoration: "none" }}
            >
              Preview
              <Icon>
                <Icon.Visible />
              </Icon>
            </Link>
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            Edit
            <Icon>
              <Icon.UpdateData />
            </Icon>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            Delete
            <Icon>
              <Icon.Deleted />
            </Icon>
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            disabled
          >
            Open Pull Request
            <Icon viewBox="0 0 14 14">
              <Icon.Github />
            </Icon>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default CardActions;
