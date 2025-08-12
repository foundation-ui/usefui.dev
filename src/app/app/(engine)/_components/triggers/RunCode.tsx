"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useEngineStore } from "@/stores";

import { SVGSpinner } from "@/components";
import { Icon, PixelIcon, WebIcon } from "@usefui/icons";
import { Button } from "@usefui/components";

import { LibraryTemplate } from "@/templates";
import { toast } from "sonner";

function RunCode({
  value,
  name,
  setError,
}: {
  value: string;
  name: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const addLibrary = useEngineStore((state) => state.addLibrary);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      addLibrary(
        JSON.stringify(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          LibraryTemplate.fn(name, JSON.parse(value)),
        ),
      );
    },

    onSuccess: () => {
      setError(null);
      toast("Library generated", {
        id: "generate-library",
        description: "Navigate the variations to get the full detail.",
      });
    },
    onError: (data) => {
      setError(`[Runtime Error] - ${data.message}`);
    },
  });

  const handleRunCode = React.useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <Button
      className="fs-medium-10"
      id="run-code-trigger"
      variant="primary"
      sizing="small"
      onClick={handleRunCode}
      disabled={isPending || name === ""}
    >
      Run
      {isPending ? (
        <SVGSpinner>
          <WebIcon.Reload />
        </SVGSpinner>
      ) : (
        <Icon>
          <PixelIcon.CornerDownRight />
        </Icon>
      )}
    </Button>
  );
}

export default RunCode;
