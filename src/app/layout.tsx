import type { Metadata } from "next";

import { ThemeProvider } from "~/components";
import { Toaster } from "sonner";

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
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
