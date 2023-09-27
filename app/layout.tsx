import "./globals.css";
import type {Metadata} from "next";
import React from "react";

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
      <body className="min-h-screen bg-gray-200 font-mono">{children}</body>
    </html>
  );
}
