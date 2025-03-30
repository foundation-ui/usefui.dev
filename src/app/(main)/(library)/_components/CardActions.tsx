"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Divider, DropdownMenu } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

function CardActions({ libraryId }: { libraryId: string }) {
  const router = useRouter();

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
            onClick={() => router.push(libraryId)}
          >
            Preview
            <Icon>
              <Icon.Visible />
            </Icon>
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
