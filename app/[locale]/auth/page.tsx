"use client";

import { useTranslations } from "next-intl";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("@components/Auth/Login"));
const Register = dynamic(() => import("@components/Auth/Register"));

export default function Auth() {
  const [login, setLogin] = useState(true);
  const t = useTranslations("Common");
  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-bold md:mb-8 lg:text-3xl">
        {login ? t("auth.login") : t("auth.register")}
      </h2>

      <div className="mx-auto max-w-lg rounded-lg border">
        <Suspense>{login ? <Login /> : <Register />}</Suspense>
        <div className="flex items-center justify-center p-4">
          <p className="text-center text-sm">
            {login ? t("auth.no_account") : t("auth.have_account")}{" "}
            <button
              className="text-secondary transition duration-100"
              onClick={() => setLogin(!login)}
            >
              {login ? t("auth.register") : t("auth.login")}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
