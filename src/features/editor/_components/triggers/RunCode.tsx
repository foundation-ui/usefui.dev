"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { SVGSpinner } from "@/components";
import { Icon, PixelIcon, WebIcon } from "@foundation-ui/icons";
import { Button } from "@foundation-ui/components";

import { LibraryTemplate } from "@/templates";
import { InsertLibraryAction } from "@/server/actions";

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
  const router = useRouter();

  const { userId, isSignedIn } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: InsertLibraryAction,
    onSuccess: () => {
      router.push("/workspace");

      setError(null);
      toast("Library generated", {
        id: "generate-library",
        description: "Close the editor to access your library.",
      });
    },
    onError: (data) => {
      setError(`[Runtime Error] - ${data.message}`);
    },
  });

  const handleRunCode = React.useCallback(() => {
    if (!isSignedIn || !userId) {
      setError(`[Unauthorized] - Sign In to generate libraries`);
      return;
    }

    mutate({
      creatorId: String(userId),
      name: name,
      description: "",
      library: JSON.stringify(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        LibraryTemplate.fn("untitled", JSON.parse(value)),
      ),
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    });
  }, [isSignedIn, mutate, name, setError, userId, value]);

  return (
    <Button
      className="fs-medium-10"
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
