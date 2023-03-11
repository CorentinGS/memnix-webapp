"use client";

import React from "react";
import {useTranslations} from "next-intl";
import {baseUrl} from "@/common/utils/utils";
import {ENDPOINTS} from "@/common/utils/endpoints";
import Link from "next/link";

export default function Login() {
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
            Log in with social
          </span>
                </div>

                <Link
                    className="btn-accent btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100"
                    href={baseUrl + ENDPOINTS.Security.github}
                >
                    Continue with github
                </Link>
                <button
                    className="btn-secondary btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100"
                    onClick={() => {
                        window.location.href = baseUrl + ENDPOINTS.Security.discord
                    }
                    }
                >
                    Continue with discord
                </button>
            </div>
        </>
    );
}
