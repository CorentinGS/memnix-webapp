import Image from "next/image";
import Link from "next/link";
import LogoImg from "@img/icon.png";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Discover = dynamic(() => import("@/components/Index/Discover"));
const Marquee = dynamic(() => import("@/components/Index/Marquee"));

export default function Home() {
  const t = useTranslations("Common");
  const td = useTranslations("Discover");

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:flex md:h-screen 2xl:h-auto pt-[72px] md:min-h-[calc(100vh-72px)]">
        <div className="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div className="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              <h1 className="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                {td.rich("description.spaced_repetition_learning_app", {
                  a: (chunks) => <span className="text-accent">{chunks}</span>,
                  b: (chunks) => <span className="lg:block">{chunks}</span>,
                  c: (chunks) => (
                    <span className="sm:whitespace-nowrap text-secondary">
                      {chunks}
                    </span>
                  ),
                })}
              </h1>
              <div className="max-w-3xl mx-auto">
                <div className="max-w-xs sm:max-w-md flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start">
                  <div className="flex w-full sm:w-auto">
                    <Link
                      className="btn btn-primary sm:mb-0 w-full"
                      href={"/auth"}
                      rel="noopener prefetch "
                    >
                      {t("cta.get_started")}
                    </Link>
                  </div>
                  <div className="flex w-full sm:w-auto">
                    <Link
                      href={"https://github.com/CorentinGS"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-full btn-outline"
                    >
                      {t("cta.learn_more")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:flex items-center flex-1">
            <div className="mx-auto max-w-4xl ">
              <Image
                src={LogoImg}
                className="rounded-md drop-shadow-2xl"
                alt="Memnix app logo"
                width={600}
                height={600}
                priority
                quality={70}
              />
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <Discover />
    </main>
  );
}
