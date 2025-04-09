"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Icon } from "@foundation-ui/icons";
import { Button } from "@foundation-ui/components";
import { Spinner } from "@/components";

import { InsertMock } from "@/server/actions";

function RunCode({
  setError,
}: {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: InsertMock,
    onSuccess: (data) => {
      console.log(data);
      router.push("/");
    },
    onError: (data) => {
      setError(`[Runtime Error] - ${data.message} }`);
    },
  });

  return (
    <Button
      className="fs-medium-10"
      variant="mono"
      sizing="small"
      onClick={() => mutate()}
      disabled={isPending}
    >
      <span className="fs-medium-10">Run</span>
      {isPending ? (
        <Spinner data-variant="inner" />
      ) : (
        <Icon width={18} height={18}>
          <Icon.Run />
        </Icon>
      )}
    </Button>
  );
}

export default RunCode;
