"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Icon } from "@foundation-ui/icons";
import { Button, Tooltip } from "@foundation-ui/components";

import { InsertMock } from "@/actions/InsertMock";
import { Spinner } from "@/components";

function RunCode() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: InsertMock,
    onSuccess: (data) => {
      console.log(data);
      router.push("/");
    },
    onError: (data) => {
      console.log(data);
    },
  });

  return (
    <Tooltip content="Run">
      <Button
        className="fs-medium-10"
        variant="ghost"
        rawicon
        onClick={() => mutate()}
      >
        {isPending ? (
          <Spinner data-variant="inner" />
        ) : (
          <Icon width={18} height={18}>
            <Icon.Run />
          </Icon>
        )}
      </Button>
    </Tooltip>
  );
}

export default RunCode;
