import "./globals.css";
import React from "react";
import type {Metadata} from "next";

import {ThemeProvider} from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Project Showcase",
  description: "sumanta ghosh project showcase",
  other: {
    "theme-color": "#c8d9f3",
    "color-scheme": "light only",
    "twitter:image":
      "https://cdn.sanity.io/images/yburxwic/production/cae953c799f84eeff0e1f908e33d9f7ad74da149-6912x3456.png",
    "twitter:card": "summary_large_image",
    "og:url": "https://project-showcase.vercel.app/",
    "og:image":
      "https://cdn.sanity.io/images/yburxwic/production/cae953c799f84eeff0e1f908e33d9f7ad74da149-6912x3456.png",
    "og:type": "website",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen font-mono">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
