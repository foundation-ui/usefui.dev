"use client";

import React from "react";
import Link from "next/link";

import { Divider, DropdownMenu } from "@foundation-ui/components";
import { Icon, PixelIcon, WebIcon } from "@foundation-ui/icons";

function CardActions({ libraryId }: { libraryId: string }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost">
          <span>
            <Icon>
              <WebIcon.More />
            </Icon>
          </span>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sizing="small">
          <DropdownMenu.Item
            className="flex align-center justify-between g-medium-10"
            radio
          >
            <Link
              href={`library/${libraryId}`}
              className="flex align-center w-100 justify-between fs-medium-10"
              style={{ textDecoration: "none" }}
            >
              Preview
              <Icon>
                <PixelIcon.Eye />
              </Icon>
            </Link>
          </DropdownMenu.Item>
          <Divider />
          <DropdownMenu.Item
            className="flex align-center w-100 justify-between fs-medium-10"
            disabled
          >
            Edit
            <Icon>
              <PixelIcon.EditBox />
            </Icon>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default CardActions;
