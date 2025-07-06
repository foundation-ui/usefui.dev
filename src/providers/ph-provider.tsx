"use client";

import React from "react";
import posthog from "posthog-js";

import { PostHogProvider as PHProvider } from "posthog-js/react";

import { env } from "@/env";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    posthog.init(`${env.NEXT_PUBLIC_POSTHOG_KEY}`, {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
      ui_host: "https://eu.posthog.com",

      person_profiles: "always",
      capture_pageview: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
