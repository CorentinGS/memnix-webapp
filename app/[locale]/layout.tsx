import "../global.css";
import React from "react";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Memnix.app",
  description: "A spaced repetition app",
};

export default function RootLayout({
  // @ts-ignore
  children,
  // @ts-ignore
  params,
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
