import Link from "next/link";
import Image from "next/image";
import LogoImg from "@img/next.svg";
import LocaleSwitcher from "@components/Global/LocalSwitcher";
import React from "react";
import {useTranslations} from 'next-intl';

export default function Header() {
    const t = useTranslations('Common');

    return (
        <>
            <div className="navbar md:px-5 transition-all">
                <div className="navbar-start">
                    <Link href={`/`}>
                        <Image
                            src={LogoImg}
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </Link>
                </div>
                <div className="navbar-end">
                    <LocaleSwitcher/>
                    <a
                        href={`/auth`}
                        aria-label="login"
                        rel="prefetch"
                        className="ml-3 btn btn-primary h-10 px-5 shadow-none text-base"
                    >
                        {t('auth.login')}
                    </a>
                </div>
            </div>
        </>
    );
}