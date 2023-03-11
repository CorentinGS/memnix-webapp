import Link from "next/link";
import Image from "next/image";
import LogoImg from "@img/icon.png";
import LocaleSwitcher from "@components/Global/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Common");

  return (
    <>
      <div className="navbar md:px-5 transition-all">
        <div className="navbar-start">
          <Link
            href={`/`}
            className={"flex flex-row items-center hoveranimation"}
          >
            <Image
              src={LogoImg}
              alt="Next.js Logo"
              quality={60}
              width={64}
              height={64}
              priority
            />
            <h2 className="from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-4xl font-bold text-primary dark:bg-gradient-to-r dark:text-transparent">
              Memnix
            </h2>
          </Link>
        </div>
        <div className="navbar-end">
          <LocaleSwitcher />
          <Link
            href={`/auth`}
            aria-label="login"
            className="ml-3 btn btn-primary h-10 px-5 shadow-none text-base"
          >
            {t("auth.login")}
          </Link>
        </div>
      </div>
    </>
  );
}
