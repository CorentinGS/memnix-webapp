import "@/app/global.css";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound, redirect } from "next/navigation";
import Header from "@components/Global/Header";
import React from "react";
import { cookies } from "next/headers";
import { isConnected } from "@/common/utils/security";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
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

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const jwt = cookies().get("jwt")?.value;
  if (!jwt || (jwt && !(await isConnected(jwt)))) {
    redirect("/auth");
  }

  return (
    <>
      <Header />
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </section>
    </>
  );
}
