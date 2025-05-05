"use client";

import React from "react";
import posthog from "posthog-js";

import { usePathname, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { useUser } from "@clerk/nextjs";

import { PostHogProvider as PHProvider } from "posthog-js/react";

import { env } from "@/env";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    posthog.init(`${env.NEXT_PUBLIC_POSTHOG_KEY}`, {
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually

      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
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
  const pathname = usePathname();
  const searchParams = useSearchParams();
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

  // Track pageviews
  React.useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }

      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}

// Wrap PostHogPageView in Suspense to avoid the useSearchParams usage above
// from de-opting the whole app into client-side rendering
// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
function SuspendedPostHogPageView() {
  return (
    <React.Suspense fallback={null}>
      <PostHogPageView />
    </React.Suspense>
  );
}
