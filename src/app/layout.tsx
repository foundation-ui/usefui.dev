import StyledComponentsRegistry from "@/lib/styles-registry";

import { ClientProvider, PostHogProvider } from "@/providers";
import { Toaster } from "sonner";

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
