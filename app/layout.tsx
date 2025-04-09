import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title: "Alfonso Alfaro | Contemporary Abstract Artist",
  description:
    "Portfolio and exhibition information for contemporary abstract artist Alfonso Alfaro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
