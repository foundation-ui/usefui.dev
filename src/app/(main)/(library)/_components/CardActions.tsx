"use client";

import React from "react";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";

import { Divider, DropdownMenu } from "@foundation-ui/components";
import { Icon, PixelIcon, WebIcon } from "@foundation-ui/icons";
import { Spinner } from "@/components";

import { DeleteMock } from "@/server/actions";

function CardActions({ libraryId }: { libraryId: string }) {
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteMock,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Icon>
            <WebIcon.More />
          </Icon>
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
          <DropdownMenu.Item
            className="flex align-center w-100 justify-between"
            disabled={isPending}
            onClick={() => mutate()}
            radio
          >
            <span className=" fs-medium-10">Delete</span>
            {isPending ? (
              <Spinner data-variant="inner" />
            ) : (
              <Icon width={18} height={18}>
                <PixelIcon.Delete />
              </Icon>
            )}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default CardActions;
