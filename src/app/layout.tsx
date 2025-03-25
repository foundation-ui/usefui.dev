import StyledComponentsRegistry from "@/lib/styles-registry";

import { ThemeProvider } from "@/providers";
import { Toaster } from "sonner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation UI Engine",
  description: "Design Token Engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
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
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
