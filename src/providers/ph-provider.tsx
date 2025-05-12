"use client";

import React from "react";
import posthog from "posthog-js";

// import { usePathname, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { useUser } from "@clerk/nextjs";

import { PostHogProvider as PHProvider } from "posthog-js/react";

import { env } from "@/env";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    posthog.init(`${env.NEXT_PUBLIC_POSTHOG_KEY}`, {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
      ui_host: "https://eu.posthog.com",

      person_profiles: "always", // or 'identified_only' to create profiles only for identified users
      capture_pageview: true,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  );
}

function PostHogPageView() {
  const posthog = usePostHog();
  const userInfo = useUser();

  // Identify user
  React.useEffect(() => {
    if (userInfo.user?.id) {
      posthog.identify(userInfo.user?.id, {
        email: userInfo.user?.primaryEmailAddress,
      });
    } else {
      posthog.reset();
    }
  }, [posthog, userInfo.user?.id, userInfo.user?.primaryEmailAddress]);

  return null;
}

function SuspendedPostHogPageView() {
  return <PostHogPageView />;
}
