import type { Metadata, Viewport } from "next";

import StyledComponentsRegistry from "@/lib/styles-registry";

import { ClientProvider, PostHogProvider } from "@/providers";
import { Toaster } from "sonner";

const siteUrl = "https://usefui.dev";
const siteName = "Foundation UI";
const appTitle = "Headless Design System platform";
const appDescription =
  "Headless Design System platform built for modern product teams to craft apps people love to use.";

// const ogImage = {
//   url: `${siteUrl}/og.jpg`,
//   width: 1200,
//   height: 630,
//   alt: "Foundation UI — Headless Design System platform",
// };

export const metadata: Metadata = {
  title: {
    default: appTitle,
    template: "Foundation UI | %s",
  },

  description: appDescription,
  applicationName: siteName,

  keywords: [
    "Foundation UI",
    "CSS engine",
    "Headless Design System",
    "Design System",
    "Design Tokens",
    "Design Tokens Engine",
    "Design Tokens Generator",
    "UI components",
    "React Design System",
    "Nextjs Design System",
  ],

  authors: [{ name: "Nicolas Nunes", url: "https://github.com/nnsncl" }],
  creator: "Foundation UI",
  publisher: "Foundation UI",
  generator: "Next.js",

  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },

  category: "technology",
  classification: "Software",
  referrer: "strict-origin-when-cross-origin",

  // Open Graph
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: siteUrl,
    siteName,
    images: [],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: appTitle,
    description: appDescription,
    images: [],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <PostHogProvider>
        <html lang="en">
          <ClientProvider>
            <body>
              <div id="portal-container" />
              <Toaster
                toastOptions={{
                  style: {
                    borderRadius: "var(--measurement-medium-30)",
                    borderColor: "var(--font-color-alpha-10)",
                    background: "var(--body-color)",
                    color: "var(--font-color)",
                    fontSize: "var(--fontsize-medium-10)",
                  },
                }}
              />
              {children}
            </body>
          </ClientProvider>
        </html>
      </PostHogProvider>
    </StyledComponentsRegistry>
  );
}
