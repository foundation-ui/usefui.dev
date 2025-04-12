"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Button } from "@foundation-ui/components";
import { Spinner } from "@/components";

import { LibraryTemplate } from "../_utils/generator-templates";
import { InsertLibraryAction } from "@/server/actions";

function RunCode({
  setError,
}: {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: InsertLibraryAction,
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
      onClick={() =>
        mutate({
          id: BigInt(198198190818190),
          creatorId: BigInt(198198190818190),
          title: "{USERNAME} Untitled Library {ID}",
          description: "",
          published: false,
          library: JSON.stringify(LibraryTemplate.fn("fui-apps", [])),
          createdAt: Date.now().toString(),
          updatedAt: Date.now().toString(),
        })
      }
      disabled={isPending}
    >
      <span className="fs-medium-10">Run</span>
      {isPending ? (
        <Spinner data-variant="inner" />
      ) : (
        <Icon width={18} height={18}>
          <PixelIcon.CornerDownRight />
        </Icon>
      )}
    </Button>
  );
}

export default RunCode;
