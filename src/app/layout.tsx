import StyledComponentsRegistry from "@/lib/styles-registry";

import { AuthProvider, ClientProvider, PostHogProvider } from "@/providers";
import { Toaster } from "sonner";

import type { Metadata } from "next";

const metadataHead = {
  title:
    "Foundation UI - Flow through Development with Production-Grade Libraries",
  description:
    "An open source Frontend Toolkit by Nicolas Nunes to help create cohesive UIs using robust components. It is a personnal toolbox, used to develop both commercial and open source software. Access the technique, components, code, and tools.",
};
export const metadata: Metadata = {
  ...metadataHead,
  openGraph: {
    ...metadataHead,
    images: [
      {
        url: "https://www.usefui.dev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "usefui.dev Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    ...metadataHead,
    card: "summary_large_image",
    images: ["https://www.usefui.dev.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <ClientProvider>
        <AuthProvider>
          <PostHogProvider>
            <html lang="en">
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
            </html>
          </PostHogProvider>
        </AuthProvider>
      </ClientProvider>
    </StyledComponentsRegistry>
  );
}
