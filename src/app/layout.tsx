import StyledComponentsRegistry from "@/lib/styles-registry";

import { AuthProvider, ClientProvider, PostHogProvider } from "@/providers";
import { Toaster } from "sonner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation UI Engine",
  description: "Open Source Design Tokens Engine",
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
          <html lang="en">
            <body>
              <PostHogProvider>
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
              </PostHogProvider>
            </body>
          </html>
        </AuthProvider>
      </ClientProvider>
    </StyledComponentsRegistry>
  );
}
