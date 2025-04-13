"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Button } from "@foundation-ui/components";
import { Spinner } from "@/components";

import { LibraryTemplate } from "../_utils/generator-templates";
import { InsertLibraryAction, RevalidateLibraryPath } from "@/server/actions";

function RunCode({
  value,
  setError,
}: {
  value: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: InsertLibraryAction,
    onSuccess: () => RevalidateLibraryPath(),
    onError: (data) => {
      setError(`[Runtime Error] - ${data.message} }`);
    },
  });

  const handleRunCode = React.useCallback(() => {
    mutate({
      creatorId: BigInt(198198190818190), // [TODO]: Replace this mocked ID to use userId. Type might change.
      name: "untitled",
      title: "untitled",
      description: "",
      library: JSON.stringify(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        LibraryTemplate.fn("untitled", JSON.parse(value)),
      ),
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    });
  }, [mutate, value]);

  return (
    <Button
      className="fs-medium-10"
      variant="mono"
      sizing="small"
      onClick={handleRunCode}
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
