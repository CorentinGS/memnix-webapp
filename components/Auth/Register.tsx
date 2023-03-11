"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Register() {
  const t = useTranslations("Common");

  return (
    <>
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="">
          <label className="label">
            <span className="label-text">{t("auth.email")}</span>
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="input-bordered input w-full px-3 py-2 transition duration-100"
          />
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">{t("auth.password")}</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input-bordered input w-full px-3 py-2 transition duration-100"
          />
        </div>

        <button className="btn-primary btn px-8 py-3 transition duration-100">
          {t("auth.login")}
        </button>

        <div className="relative flex items-center justify-center">
          <span className="absolute inset-x-0 h-px bg-base-content"></span>
          <span className="relative bg-base-100 px-4 text-sm">
            Register with social
          </span>
        </div>

        <button className="btn-accent btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100">
          Continue with github
        </button>
        <button className="btn-secondary btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100">
          Continue with discord
        </button>
      </div>
    </>
  );
}
